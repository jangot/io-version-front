import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import createCache from '@emotion/cache';

import '../styles/globals.css'
import ResponsiveAppBar from '../component/top-bar';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}
const clientSideEmotionCache = createEmotionCache();


export default function App(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const theme = createTheme({})

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ResponsiveAppBar />
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}
