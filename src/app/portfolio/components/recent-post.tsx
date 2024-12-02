/* eslint-disable @typescript-eslint/no-explicit-any */
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Section } from "./section"
import BlogCard from "./cards/blog-card"
import { fetchPages } from "@/lib/notion"
import { formatDate } from "@/lib/utils"


export const RecentPost = async () => {

  const posts = await fetchPages()

  console.log("posts", posts.results);
  

  return (
    <Section>
   <div className="w-full  max-auto">
      <div className="flex  items-start">
        <div>
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            Articles Recents
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Voici quelques-uns de mes articles les plus résents
        </p>
        </div>
            <Button variant="link" className="ml-auto  hover:text-muted-foreground">
              <AnimatedShinyText className="inline-flex items-center" >
              <Link prefetch={false} href="/portfolio/blog" className="hover:underline-none" >
              Voir plus
              </Link>
              <ArrowRight className="ml-2" size={16} />
              </AnimatedShinyText>
            </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {
          posts.results.slice(0, 3).map((post: any) => (
            <div key={post.id}>
            <BlogCard
                href={`/portfolio/blog/${post.properties?.slug?.rich_text[0]?.plain_text}`}
                key={post.id}
                imageUrl={post.cover?.file?.url ?? "/placeholder.svg"}
                title={post.properties?.title?.title[0]?.plain_text}
                excerpt={post.properties?.excerpt?.rich_text[0]?.plain_text}
                author={{
                  name: "Mouhamed Lamotte",
                  avatarUrl: "/me.jpg",
                }}
                date={formatDate(post.created_time)}
              />

            </div>
            
          ))
        }
      </div>
    </div>
  </Section>
  )
}


