/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/[locale]/components/ui/avatar";
import { CalendarIcon } from "lucide-react";
import { Section } from "../../components/section";
import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { notFound } from "next/navigation";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Block } from "@notion-render/client/dist/types";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/app/[locale]/components/ui/badge";
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const post = await fetchBySlug(slug);

  if (!post) {
    return {
      title: 'Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  const p: any = post;

  return {
    title: p?.properties?.title?.title[0]?.plain_text || 'Blog Post',
    description: p?.properties?.description?.rich_text[0]?.text?.content || 'A blog post by Mouhameth Lamotte',
    openGraph: {
      title: p?.properties?.title?.title[0]?.plain_text || 'Blog Post',
      description: p?.properties?.description?.rich_text[0]?.text?.content || 'A blog post by Mouhameth Lamotte',
      url: `https://portfolio.mouhamedlamotte.tech/blog/${slug}`,
      siteName: 'Mouhameth Lamotte Portfolio',
      images: [
        {
          url: p.properties?.thumb?.rich_text[0]?.text?.content || 'https://portfolio.mouhamedlamotte.tech/og.png',
          width: 1200,
          height: 630,
          alt: p?.properties?.title?.title[0]?.plain_text || 'Blog Post',
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@MouhamedLamotly',
      creator: '@MouhamedLamotly',
      title: p?.properties?.title?.title[0]?.plain_text || 'Blog Post',
      description: p?.properties?.description?.rich_text[0]?.text?.content || 'A blog post by Mouhameth Lamotte',
      images: [
        {
          url: p.properties?.thumb?.rich_text[0]?.text?.content || 'https://portfolio.mouhamedlamotte.tech/og.png',
          width: 1200,
          height: 630,
          alt: p?.properties?.title?.title[0]?.plain_text || 'Blog Post',
        },
      ],
    },
  };
}


export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const slug = (await params).slug;

  const post = await fetchBySlug(slug);

  if (!post) {
    return notFound();
  }

  const blocks: Block[] = await fetchPageBlocks(post.id).then((blocks) =>
    blocks.map((block) => ({
      type: block.type as string,
      ...block,
    }))
  );

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);

  const p: any = post;

  console.log(p?.properties?.tags?.multi_select);
  

  return (
    <>
      <Section>
        <article className="max-w-3xl mx-auto mt-4">
          <h1 className="text-4xl font-bold mb-4">
            {p?.properties?.title?.title[0]?.plain_text as unknown as string}
          </h1>
          <div className="mb-6 flex flex-col items-start space-y-2 md:flex-row md:items-center ">
            <div className="flex items-center space-x-4  mt-6">
              <Avatar>
                <AvatarImage src="/me.jpeg" alt="Mouhamed Lamotte" />
                <AvatarFallback>ML</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Mouhamed Lamotte</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  {formatDate(post.created_time)}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:ml-auto flex-wrap">
              {
                p?.properties?.tags?.multi_select?.map((tag : {id: string, name: string, color: string}) => (
                    <Badge key={tag.id}  variant="outline"
                      style={{ backgroundColor: tag.color }}
                    >{tag.name}</Badge>
                ))
              }
            </div>
          </div>
              <div className="h-[300px] w-full border rounded-md mt-6 mb-8 overflow-hidden">

          <img
            src={p.properties?.thumb?.rich_text[0]?.text?.content ?? "/placeholder.svg"}
            alt={
              p?.properties?.title?.title[0]?.plain_text as unknown as string
            }
            className="object-contain rounded-lg mb-8 h-full w-full"
          />
              </div>

          <div
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </Section>
    </>
  );
}
