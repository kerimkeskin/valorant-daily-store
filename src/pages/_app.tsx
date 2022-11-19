import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeProvider from 'utils/theme';
import MainLayout from 'components/layouts/main/main-layout';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </Provider>
  );
}
