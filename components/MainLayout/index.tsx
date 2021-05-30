import React, { ReactElement } from 'react';
import dynamic from 'next/dynamic';

import { mainContext, defaultContextValue } from '../../context';

const SearchBar = dynamic(() => import('../SearchBar'));
const Breadcrumb = dynamic(() => import('../Breadcrumb'));
const Header = dynamic(() => import('../Header'));

export default ({ children, ...props }: any): ReactElement => (
  <mainContext.Provider value={defaultContextValue}>
    <Header />
    <SearchBar />
    <Breadcrumb data={props?.categories ?? []} />
    {React.cloneElement(children, { ...props })}
  </mainContext.Provider>
);
