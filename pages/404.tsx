import React, { ReactElement } from 'react';
import Link from 'next/link';

import SearchBar from '../components/SearchBar';
import Header from '../components/Header';

export default (): ReactElement => {
  const headers = {
    title: 'Mercado Libre | Pagina no econtrada (404)',
    metaDescription: 'Elemento que estas buscando no se encontro',
  };
  return (
    <div>
      <SearchBar />
      <Header {...headers} />

      <h1 className="not-found-page__error-title">404 | Elemento que buscas no se cuentra por favor intenta con otro</h1>

      <Link href="/"><a className="not-found-page__link">ir a la pagiona principal</a></Link>
    </div>
  );
};
