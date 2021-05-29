import React from 'react';

import '../styles/globals.sass';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
