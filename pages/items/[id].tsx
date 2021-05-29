import React, { ReactElement } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import requester from '../../utils/requester';
import { IEItemDetail } from '../../interfaces';

import './style.sass';

const SearchBar = dynamic(() => import('../../components/SearchBar'));
const Breadcrumb = dynamic(() => import('../../components/Breadcrumb'));
const Header = dynamic(() => import('../../components/Header'));

const { LOCAL_API_PATH } = process.env;

export default ({ item }: IEItemDetail): ReactElement => {
  const headerProps = {
    title: `Mercado Libre | ${item?.title}`,
    metaDescription: `Mercado Libre | ${item?.description}`,
  };

  return (
    <div>
      <Header {...headerProps} />
      <SearchBar />
      <Breadcrumb data={item.categories} />
      <div className="body-content body-content__info">
        <div className="item__content">
          <div>
            <figure>
              <Image src={item.picture} width={680} height={780} alt={item.title} />

              <p className="item__description-title">Descripcion del producto</p>
              <p className="item__description-info">{item.description}</p>
            </figure>
          </div>
          <div>
            <p className="item__quantity-sell">
              {item.condition}
              {' '}
              -
              {' '}
              {item.sold_quantity}
              {' '}
              Vendidos
            </p>
            <p className="item__title">{item.title}</p>
            <p className="item__price">
              {item.price.currency}
              {' '}
              {item.price.amount}
              <span className="item__detail-decimals">.00</span>
            </p>
            <button className="item__button-order" type="button" aria-label="Compra YA">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query: { id } }: any) {
  const parameters = {
    props: { },
  };

  try {
    const { data } = await requester({
      url: `${LOCAL_API_PATH}/items/${id}`, config: {},
    });

    parameters.props = data;
  } catch {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }

  return parameters;
}
