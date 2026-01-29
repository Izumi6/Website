import '../styles/globals.css'
import { useEffect } from 'react'
import SignatureLogo from '../components/SignatureLogo'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize smooth scrolling
    if (typeof document !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth'
    }
  }, [])

  return (
    <>
      <SignatureLogo />
      <Component {...pageProps} />
    </>
  )
}

