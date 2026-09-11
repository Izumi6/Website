import Script from 'next/script'
import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import CustomCursor from '../components/CustomCursor'
import CopilotProvider from '../components/copilot/CopilotProvider'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Reset scroll to top on page navigation (unless navigating to an anchor hash)
    const handleRouteChange = (url) => {
      if (!url.includes('#')) {
        window.scrollTo(0, 0)
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

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
      <CopilotProvider>
        <CustomCursor />
        <Navbar />
        <Component {...pageProps} />
      </CopilotProvider>
    </>
  )
}
