import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IEItemsSearchResult } from '../../interfaces';

interface IECardItemData {
  data: IEItemsSearchResult[]
}

export default ({ data }: IECardItemData): ReactElement => {
  const getPath = ({ id }: any) => `/items/${id}`;

  return (
    <>
      {data?.map((item) => (
        <div key={item.id} className="card__content-item">
          <div className="card__content-image">
            <figure>
              <Link href={getPath(item)}>
                <a rel="external nofollow">
                  <Image
                    src={item.picture}
                    width={160}
                    height={160}
                    alt={item.title}
                    className="card__image"
                  />
                </a>
              </Link>
            </figure>
            <div>
              <Link href={getPath(item)}>
                <a rel="external nofollow">
                  <div className="card__content-pricing">
                    <p>
                      {item.price.currency}
                      {' '}
                      {item.price.amount}
                    </p>
                    {item.free_shipping && (
                    <Image src="/ic_shipping@2x.png" width={20} height={20} />
                    )}
                  </div>
                </a>
              </Link>
              <p>{item.title}</p>
            </div>
          </div>
          <p>{item.condition}</p>
        </div>
      ))}
    </>
  );
};
