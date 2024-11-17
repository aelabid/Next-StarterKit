// app/RootLayoutClient.tsx
'use client';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ReactQueryProvider } from '@/context/ReactQueryProvider';
import { Provider } from 'react-redux';
import store from '@/store/index';
import Header from '@/components/layout/Header';
import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayoutClient({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body>
        <Provider store={store}>
          <ReactQueryProvider>
            <NextIntlClientProvider
              locale={locale}
              messages={messages}
              timeZone="Europe/Paris"
            >
              <ChakraProvider>
                <Header />
                <main>{children}</main>
                <footer>Main Footer</footer>
              </ChakraProvider>
            </NextIntlClientProvider>
          </ReactQueryProvider>
        </Provider>
      </body>
    </html>
  );
}
