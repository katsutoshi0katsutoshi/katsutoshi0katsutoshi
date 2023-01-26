import {useState, useEffect,Suspense} from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import MainNav from '../components/mainnav'
import MainVisual from '../components/mainvisual'
import Loading from '../components/loading'
import Opening from '../components/opening'

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false);
      }, 2 * 1000)
    }, [])  

  return (
    <>
     <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head> 
      {isLoading ?
      <>
      <Loading />
      </>:
      <>
      {/*<Loading />*/}
      <Opening />
      <MainVisual/>
      <MainNav />
      </>}
      </Layout>
    </>
  )
}