import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { UserSessionProvider } from '../contexts/userSessionContext'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UserSessionProvider>
        <Header />

        <Component {...pageProps} />

        <Footer />
      </UserSessionProvider>
    </ChakraProvider>
  )
}
