import React from 'react';

// Global Layout
import LayoutHeader from '../components/HeaderLayout';

// style componentes
import '../styles/globals.sass';
import '../styles/searchbar.component.style.sass';
import '../styles/breadcrum.component.style.sass';
import '../styles/carditem.component.style.sass';

// style pages
import '../styles/items.page.style.sass';

function MyApp({ Component, pageProps }: any) {
  return (
    <LayoutHeader {...pageProps}>
      <Component />
    </LayoutHeader>
  );
}

export default MyApp;
