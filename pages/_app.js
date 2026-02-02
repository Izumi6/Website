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
      <CustomCursor />
      <SignatureLogo />
      <Component {...pageProps} />
    </>
  )
}

