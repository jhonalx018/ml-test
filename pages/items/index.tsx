import React, { ReactElement, useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import requester from '../../utils/requester';
import { IESearchListResult } from '../../interfaces';
import { mainContext } from '../../context';

const CardItem = dynamic(() => import('../../components/CardItem'));

const { LOCAL_API_PATH } = process.env;

export default ({ categories = [], items = [] }: IESearchListResult): ReactElement => {
  const router = useRouter();
  const { getHeaders = () => {} } = useContext(mainContext);

  useEffect(() => {
    getHeaders({
      title: `Buscador mercado libre | ${router.query?.search || ''}`,
      metaDescription: `Resultados buscador mercado libre | ${categories.join(', ')} probando`,
    });
  }, [router.query?.search, categories]);

  return (
    <>
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
