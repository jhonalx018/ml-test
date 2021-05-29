import React from 'react';

// componentes
import '../styles/globals.sass';
import '../styles/searchbar.component.style.sass';
import '../styles/breadcrum.component.style.sass';
import '../styles/carditem.component.style.sass';

// pages
import '../styles/items.page.style.sass';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
