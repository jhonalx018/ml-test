import { ReactElement, useContext } from 'react';
import Head from 'next/head';
import { mainContext } from '../../context';

export default (): ReactElement => {
  const { headers: { title, metaDescription } } = useContext(mainContext);

  return (
    <Head>
      <title>{title || 'Mercado Libre'}</title>
      <meta name="description" content={metaDescription || 'Mercado Libre'} />
    </Head>
  );
};
