import React from "react"
import Head from "next/head"
import Layout from "@/components/Layout"
import SkillsPage from "@/components/section/skillspage/"

function Skills() {
    return (
        <>
            <Head>
                <title> a.me | skills </title>
            </Head>
            <Layout>
                <SkillsPage />
            </Layout>
        </>
    )
}

export default Skills
