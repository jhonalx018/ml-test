import { HTTPMethod } from 'http-method-enum';
import {
  StatusCodes,
} from 'http-status-codes';

import requester from '../../utils/requester';
import { IESearchListResult, IEItemsSearchResult } from '../../interfaces';
import ExceptionApi from '../../exceptions';

const {
  ML_API_PATH = '', AUTHOR, LAST_NAME, CURRENCY_DECIMALS, DEFAULT_LIMIT_SEARCH,
} = process.env;

const author = {
  name: AUTHOR,
  lastname: LAST_NAME,
};

const getValuesFromCategoryFilter = (values: any) => (
  values?.flatMap(({ path_from_root }: any) => (
    path_from_root || []).map(({ name }: any) => name))
);

const getCategories = (filters: any): any => (
  [...new Set(filters.flatMap(({ values, name: categoryName }: any) => (
    getValuesFromCategoryFilter(values) ?? categoryName
  )))]
);

const buildItems = (result: any): IEItemsSearchResult[] => (
  result.map((item: any) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: CURRENCY_DECIMALS,
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  }))
);

export default async ({ method, query }: any, res: any) => {
  try {
    if (method.toUpperCase() === HTTPMethod.GET) {
      const { data: { results, filters } } = await requester({
        url: `${ML_API_PATH}/sites/MLA/search`,
        config: {
          params: {
            ...query,
            limit: query.limit || DEFAULT_LIMIT_SEARCH,
          },
        },
      });

      const response: IESearchListResult = {
        author,
        categories: getCategories(filters),
        items: buildItems(results),
      };

      return res.send(response);
    }

    throw new ExceptionApi(`Method Not Allowed ${method}`, '', StatusCodes.METHOD_NOT_ALLOWED);
  } catch (exception) {
    if (exception instanceof ExceptionApi) {
      return res.status(exception.statusCode).send(exception);
    }

    return res.status(exception.statusCode || 500).send(exception.error || exception);
  }
};
