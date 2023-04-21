import Script from 'next/script'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'
import { Navbar, Footer } from '@/components'


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='white'>
      <div className='dark:bg-nft-dark bg-white min-h-screen'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      <Script src="https://kit.fontawesome.com/789caa2757.js" crossorigin="anonymous"></Script>
    </ThemeProvider>
  )
}
