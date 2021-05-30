import React, { ReactElement, useContext } from 'react';
import Image from 'next/image';

import requester from '../../utils/requester';
import { IEItemDetail } from '../../interfaces';
import { mainContext } from '../../context';

const { LOCAL_API_PATH } = process.env;

export default ({ item }: IEItemDetail): ReactElement => {
  const context = useContext(mainContext);

  context.headers = {
    title: `Mercado Libre | ${item?.title}`,
    metaDescription: `Mercado Libre | ${item?.description}`,
  };

  return (
    <>
      <div className="body-content body-content__info">
        <div className="item-detail-page__content">
          <div>
            <figure>
              <Image src={item.picture} width={680} height={780} alt={item.title} />

              <p className="item-detail-page__description-title">Descripcion del producto</p>
              <p className="item-detail-page__description-info">{item.description}</p>
            </figure>
          </div>
          <div>
            <p className="item-detail-page__quantity-sell">
              {item.condition}
              {' '}
              -
              {' '}
              {item.sold_quantity}
              {' '}
              Vendidos
            </p>
            <p className="item-detail-page__title">{item.title}</p>
            <p className="item-detail-page__price">
              {item.price.currency}
              {' '}
              {item.price.amount}
              <span className="item-detail-page__detail-decimals">.00</span>
            </p>
            <button className="item-detail-page__button-order" type="button" aria-label="Compra YA">Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query: { id } }: any) {
  try {
    const { data } = await requester({
      url: `${LOCAL_API_PATH}/items/${id}`,
    });

    return {
      props: data,
    };
  } catch {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }
}
