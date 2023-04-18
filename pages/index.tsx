import Layout from '@/components/Layout'
import Head from 'next/head'
import Homepage from '@/components/section/homepage'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>a.me | Home</title>
      </Head>
      <Layout>
        <Homepage/>
      </Layout>
    </>
  )
}
