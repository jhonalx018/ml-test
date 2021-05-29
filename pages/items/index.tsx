import React, { ReactElement } from 'react';
import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';

import requester from '../../utils/requester';
import { IESearchListResult } from '../../interfaces';

const SearchBar = dynamic(() => import('../../components/SearchBar'));
const CardItem = dynamic(() => import('../../components/CardItem'));
const Breadcrumb = dynamic(() => import('../../components/Breadcrumb'));
const Header = dynamic(() => import('../../components/Header'));

const { LOCAL_API_PATH } = process.env;

export default ({ categories = [], items = [] }: IESearchListResult): ReactElement => {
  const router = useRouter();

  const headerProps = {
    title: `Buscador mercado libre ${router.query?.search || ''}`,
    metaDescription: `Resultados buscador mercado libre ${categories.join(', ')}`,
  };

  return (
    <div>
      <Header {...headerProps} />
      <SearchBar />
      <Breadcrumb data={categories} />
      <div className="body-content body-content__info">
        <CardItem data={items} />
      </div>

      {!items.length && (
        <p className="not-found-page__link">No se encontraron resultados, Sigue intentado</p>
      )}
    </div>
  );
};

export async function getServerSideProps({ query: { search: q, limit } }: any) {
  const parameters = {
    props: {},
  };

  try {
    const { data } = await requester({
      url: `${LOCAL_API_PATH}/search`,
      config: {
        params: { q, limit },
      },
    });

    parameters.props = data;
  } catch { }

  return parameters;
}
