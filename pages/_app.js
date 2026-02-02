import Script from 'next/script'
import '../styles/globals.css'
import { useEffect } from 'react'
import SignatureLogo from '../components/SignatureLogo'
import CustomCursor from '../components/CustomCursor'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize smooth scrolling
    if (typeof document !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth'
    }
  }, [])

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Y0H3CMPEP9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y0H3CMPEP9');
        `}
      </Script>
      <CustomCursor />
      <SignatureLogo />
      <Component {...pageProps} />
    </>
  )
}

