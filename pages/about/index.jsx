import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AboutPage from '@/components/section/aboutpage/index'

function About() {
  return (
    <>
        <Head>
            <title>a.me | about</title>
        </Head>
        <Layout>
            <AboutPage/>
        </Layout>
    </>
  )
}

export default About