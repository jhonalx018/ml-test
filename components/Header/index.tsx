import { ReactElement } from 'react';
import Head from 'next/head';

interface IEHeader {
  title?: string;
  metaDescription?: string
}

export default ({ title, metaDescription }: IEHeader): ReactElement => (
  <Head>
    <title>{title || 'Mercado Libre'}</title>
    <meta name="description" content={metaDescription || 'Mercado Libre'} />
  </Head>
);
