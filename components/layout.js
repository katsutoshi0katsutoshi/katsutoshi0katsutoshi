import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'もきち'
export const siteTitle = 'もきちのブログ'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="もきちのブログです。"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet"></link>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <header className={styles.header}>
        {home ? (
          <>
            {/*<Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />*/}
            <h1 className='text-white text-2xl font-bold z-10 p-4'>{name}</h1>
          </>
        ) : (
          <>
            <h1 className='text-white text-2xl font-bold z-10 p-4'><Link href={`/`}>{name}</Link></h1>
          </>
        )}
      </header>
      <main className={styles.site_wrap}>
        {children}
        {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      </main>

    </div>
  )
}
