/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon} from 'lucide-react'
import { Section } from "../../components/section"
import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion"
import { notFound } from "next/navigation"
import { NotionRenderer } from "@notion-render/client"
import hljsPlugin from "@notion-render/hljs-plugin"
import bookmarkPlugin from "@notion-render/bookmark-plugin"
import { Block } from "@notion-render/client/dist/types"
import { formatDate } from "@/lib/utils"

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {

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

  const p:any = post
  


  return (
  <>
    <Section>
    <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{p?.properties?.title?.title[0]?.plain_text as unknown as string}</h1>
        
        <div className="flex items-center space-x-4 mb-6">
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

        <img 
          src={p.cover?.file?.url ?? "/placeholder.svg"}
          alt={p?.properties?.title?.title[0]?.plain_text as unknown as string}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />
      <div className="prose prose-lg max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Section>

      {/* <Section>
        <h2 className="text-2xl font-bold mb-6">Articles Similaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Les tendances du développement web en 2024</CardTitle>
              <CardDescription>Par Marie Dupont • 15 mars 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">Découvrez les technologies et pratiques qui façonneront le paysage du développement web cette année.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Comment l&apos;IA améliore l&apos;expérience utilisateur</CardTitle>
              <CardDescription>Par Jean Martin • 22 mars 2024</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold mb-6">Commentaires</h2>
        <Card className="border-y-0 border-r-0 rounded-none border-l-2">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sophie Lefebvre" />
                <AvatarFallback>SL</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Sophie Lefebvre</CardTitle>
                <CardDescription>Il y a 2 jours</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>Excellent article ! J&apos;ai particulièrement apprécié la partie sur l&apos;optimisation des performances. C&apos;est fascinant de voir comment l&apos;IA peut améliorer l&apos;expérience utilisateur de manière si significative.</p>
          </CardContent>
        </Card>
      </Section> */}
    </>
  )
}

