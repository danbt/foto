import '../../styles/global.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }: AppProps) {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />;
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
