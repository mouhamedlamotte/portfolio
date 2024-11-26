import About from "./about"
import Experience from "./experience"
import { HomeHero } from "./hero"
import Layout from "./layout"

export const Portfolio = () => {
    return (
        <Layout>
            <HomeHero />
            <About/>
            <Experience />
        </Layout>
    )
}