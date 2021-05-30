import React, { ReactElement } from 'react';
import dynamic from 'next/dynamic';

import { mainContext, defaultContextValue } from '../../context';

const SearchBar = dynamic(() => import('../SearchBar'));
const Breadcrumb = dynamic(() => import('../Breadcrumb'));
const Header = dynamic(() => import('../Header'));

/*
  With Pass component as paramters
  to avoid React.Clone element using composition {props.children}
*/
export default ({ Component, ...props }: any): ReactElement => (
  <mainContext.Provider value={defaultContextValue}>
    <Header />
    <SearchBar />
    <Breadcrumb data={props?.categories ?? []} />
    <Component {...props} />
  </mainContext.Provider>
);
