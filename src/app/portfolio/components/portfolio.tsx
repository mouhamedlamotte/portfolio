"use server"

import About from "./about"
import { Contacts } from "./contacts"
import Experience from "./experience"
import { HomeHero } from "./hero"
import Layout from "../layout"
import { RecentProjects } from "./recent-projects"

  

export const Portfolio = async () => {

    
    return (
        <Layout>
            <HomeHero />
            <About/>
            <Experience />
            <RecentProjects/>
            <Contacts />
        </Layout>
    )
}