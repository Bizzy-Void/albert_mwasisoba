import React from 'react'
import Head from "next/head";
import Layout from '@/components/Layout';
import ContactPage from '@/components/section/contact'

function Contact() {
  return (
    <>
        <Head>
            <title> a.me | contact </title>
        </Head>
        <Layout>
            <ContactPage/>
        </Layout>
    </>
  )
}

export default Contact