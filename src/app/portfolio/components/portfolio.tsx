"use server"

import About from "./about"
import { Contacts } from "./contacts"
import Experience from "./experience"
import { Footer } from "./footer"
import { HomeHero } from "./hero"
import Layout from "../layout"
import { RecentProjects } from "./recent-projects"
import { NextRequest } from "next/server"

export async function getServerSideProps(context) {
    const userAgent = context.req.headers['user-agent'];
    console.log({ userAgent });
    return {
      props: {userAgent}, // will be passed to the page component as props
    }
  }
  

export const Portfolio = async () => {

    
    return (
        <Layout>
            <HomeHero />
            <About/>
            <Experience />
            <RecentProjects/>
            <Contacts />
            <Footer />
        </Layout>
    )
}