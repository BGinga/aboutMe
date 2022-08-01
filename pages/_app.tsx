import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../templates/header'
import Footer from '../templates/footer'
import Index from '.'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Index>
        <Component {...pageProps} />
      </Index>
      <Footer/>
    </>
  )
}

export default MyApp
