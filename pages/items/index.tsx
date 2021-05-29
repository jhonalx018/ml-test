import React, { ReactElement } from 'react';

import { useRouter } from 'next/router';

import requester from '../../utils/requester';
import { IESearchListResult } from '../../interfaces';

import SearchBar from '../../components/SearchBar/index';
import Breadcrumb from '../../components/Breadcrumb/index';
import Header from '../../components/Header/index';
import CardItem from '../../components/CardItem/index';

const { LOCAL_API_PATH } = process.env;

export default ({ categories = [], items = [] }: IESearchListResult): ReactElement => {
  const router = useRouter();

  const headerProps = {
    title: `Buscador mercado libre ${router.query?.search || ''}`,
    metaDescription: `Resultados buscador mercado libre ${categories.join(', ')}`,
  };

  return (
    <>
      <Header {...headerProps} />
      <SearchBar />
      <Breadcrumb data={categories} />
      <div className="body-content body-content__info">
        <CardItem data={items} />
      </div>

      {!items.length && (
        <p className="not-found-page__link">No se encontraron resultados, Sigue intentado</p>
      )}
    </>
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
