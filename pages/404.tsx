import React, { ReactElement, useContext, useEffect } from 'react';
import Link from 'next/link';

import { mainContext } from '../context';

export default (): ReactElement => {
  const { getHeaders = () => {} } = useContext(mainContext);

  useEffect(() => {
    getHeaders({
      title: 'Mercado Libre | Pagina no econtrada (404)',
      metaDescription: 'Elemento que estas buscando no se encontro',

    });
  }, []);

  return (
    <div>
      <h1 className="not-found-page__error-title">404 | Elemento que buscas no se cuentra por favor intenta con otro</h1>

      <Link href="/"><a className="not-found-page__link">ir a la pagiona principal</a></Link>
    </div>
  );
};
