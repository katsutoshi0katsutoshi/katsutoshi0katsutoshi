import '../styles/globals.css'
import NextNprogress from 'nextjs-progressbar' 

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NextNprogress color="#FFF" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
