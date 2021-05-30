import {
  StatusCodes,
} from 'http-status-codes';
import { HTTPMethod } from 'http-method-enum';
import ExceptionApi from '../../../exceptions';
import requester from '../../../utils/requester';
import { IEItemDetail } from '../../../interfaces';

const {
  ML_API_PATH = '', AUTHOR, LAST_NAME, CURRENCY_DECIMALS,
} = process.env;

const author = {
  name: AUTHOR,
  lastname: LAST_NAME,
};

export default async ({ method, query }: any, res: any) => {
  try {
    if (method.toUpperCase() === HTTPMethod.GET) {
      /*
        We can use a axios.all, promomise.all or promise.allSettled but the main idea is
        throw an error when one of this request is broken
      */
      const { data: item } = await requester({
        url: `${ML_API_PATH}/items/${query.id}`,
      });

      const { data: description } = await requester({
        url: `${ML_API_PATH}/items/${query.id}/description`,
      });

      const { data: categories } = await requester({
        url: `${ML_API_PATH}/categories/${item.category_id}`,
      });

      const response: IEItemDetail = {
        author,
        item: {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: CURRENCY_DECIMALS ?? '',
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item?.shipping?.free_shipping,
          sold_quantity: item.sold_quantity,
          description: description.plain_text,
          categories: categories?.path_from_root?.map(({ name }: any) => name) || [],
        },
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
