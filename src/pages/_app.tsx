import '../styles/globals.css'

import { Session } from 'inspector'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'

import store from '../app/store'

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) => (
  <Provider store={store}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </Provider>
)

export default MyApp
