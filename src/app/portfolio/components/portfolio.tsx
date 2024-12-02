"use server"

import About from "./about"
import { Contacts } from "./contacts"
import Experience from "./experience"
import { HomeHero } from "./hero"
import Layout from "../layout"
import { RecentProjects } from "./recent-projects"
import { RecentPost } from "./recent-post"

  

export const Portfolio = async () => {

    
    return (
        <Layout>
            <HomeHero />
            <About/>
            <Experience />
            <RecentProjects/>
            <RecentPost />
            <Contacts />
        </Layout>
    )
}