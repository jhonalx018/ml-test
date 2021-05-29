import React, { ReactElement } from 'react';
import './style.sass';
import Link from 'next/link';

interface IEBreadcrumb {
    data: string[]
}

export default ({ data }: IEBreadcrumb): ReactElement => {
  const getParseUrl = (path: string) => `/items?${new URLSearchParams({ search: path })}`;

  return (
    <div className="body-content breadcrumb__content">
      {data.map((item) => (
        <div key={item} className="breadcrumb__link">
          <Link href={getParseUrl(item)}><a rel="external nofollow" aria-label={item}>{item}</a></Link>
        </div>
      ))}
    </div>
  );
};
