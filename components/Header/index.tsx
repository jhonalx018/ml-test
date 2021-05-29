import { ReactElement } from 'react';
import Head from 'next/head';

interface IEHeader {
    title: string;
    metaDescription: string
}

export default ({ title, metaDescription }: IEHeader): ReactElement => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={metaDescription} />
  </Head>
);
