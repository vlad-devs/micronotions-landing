import { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { types } from '@micro-notion/shared-data';
import {
  updateHTMLThemeSetting,
  useMantineThemeSync,
} from '@micro-notion/hooks-and-contexts';

import { Footer } from '../components/footer';

import '../styles/global.css';
import 'libs/components/src/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const mantineTheme = useMantineThemeSync();
  useEffect(
    () =>
      updateHTMLThemeSetting(mantineTheme.colorScheme as types.ThemeSetting),
    [mantineTheme.colorScheme]
  );

  return (
    <>
      <Head>
        <title>Micronotions</title>
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Notion-based applications that push beyond usual Notion templates"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider withNormalizeCSS withGlobalStyles theme={mantineTheme}>
        <main className="app">
          <Component {...pageProps} />
        </main>
        <Footer />
      </MantineProvider>
    </>
  );
}

export default CustomApp;
