import React, { ReactElement, useState } from 'react';
import dynamic from 'next/dynamic';

import { mainContext, defaultContextValue } from '../../context';

const SearchBar = dynamic(() => import('../SearchBar'));
const Breadcrumb = dynamic(() => import('../Breadcrumb'));
const Header = dynamic(() => import('../Header'));

/*
  With Pass component as paramters
  to avoid React.Clone element using composition {props.children}
*/
export default ({ Component, ...props }: any): ReactElement => {
  const [headers, setHeaders] = useState({});

  const getHeaders = (res: any) => setHeaders(res);

  return (
    <mainContext.Provider value={{ ...defaultContextValue, getHeaders }}>
      <Header {...headers} />
      <SearchBar />
      <Breadcrumb data={props?.categories ?? []} />
      <Component {...props} getHeaders={getHeaders} />
    </mainContext.Provider>
  );
};
