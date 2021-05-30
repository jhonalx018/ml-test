import React from 'react';

// Global Layout
import MainLayout from '../components/MainLayout';

// style componentes
import '../styles/globals.sass';
import '../styles/searchbar.component.style.sass';
import '../styles/breadcrum.component.style.sass';
import '../styles/carditem.component.style.sass';

// style pages
import '../styles/items.page.style.sass';

function MyApp({ Component, pageProps }: any) {
  return (
    <MainLayout {...pageProps} Component={Component} />
  );
}

export default MyApp;
