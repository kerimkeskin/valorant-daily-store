import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeProvider from 'utils/theme';
import MainLayout from 'components/layouts/main/main-layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
