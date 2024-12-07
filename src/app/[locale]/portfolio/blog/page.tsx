/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { fetchPages } from "@/lib/notion";
import { Section } from "../components/section";
import NotFound from "@/app/[locale]/not-found";
import AnimatedShinyText from "@/app/[locale]/components/ui/animated-shiny-text";
import { Button } from "@/app/[locale]/components/ui/button";
import { resume } from "@/app/[locale]/data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import React from "react";
import BlogCard from "../components/cards/blog-card";
import { formatDate } from "@/lib/utils";



export default async function Page() {

    const posts = await fetchPages()

    return (
        <Section >
        <div className="pb-10 flex  items-start">
          <div>
            <h2 className="text-lg md:text-4xl mb-4 max-w-4xl uppercase font-bold">
              Blog
            </h2>
            <Markdown className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base  max-w-lg">
              retrouver mes derniers articles
            </Markdown>
          </div>
          <Button
            variant="link"
            className="ml-auto  hover:text-muted-foreground"
  
          >
            <Link prefetch={false} href="/portfolio">
            <AnimatedShinyText className="inline-flex items-center">
              <ArrowLeft className="me-2" size={16} />
              Retour
            </AnimatedShinyText>
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
      
        {
          posts.map((post: any) => (
            <div key={post.id}>
            <BlogCard
                href={`/portfolio/blog/${post.properties?.slug?.rich_text[0]?.plain_text}`}
                key={post.id}
                imageUrl={post.cover?.file?.url ?? "/placeholder.svg"}
                title={post.properties?.title?.title[0]?.plain_text}
                excerpt={post.properties?.excerpt?.rich_text[0]?.plain_text}
                author={{
                  name: "Mouhamed Lamotte",
                  avatarUrl: "/me.jpeg",
                }}
                date={formatDate(post.created_time)}
              />

            </div>
            
          ))
        }

        </div>

      </Section>
    )
}