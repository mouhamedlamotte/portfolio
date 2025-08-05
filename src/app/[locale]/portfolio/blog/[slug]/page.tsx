
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
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!params || !slug) {
    return {
      title: "Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  const post = await fetchBySlug(slug);

  if (!post) {
    return {
      title: "Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  const p: any = post;

  return {
    title: p?.properties?.title?.title[0]?.plain_text || "Blog Post",
    description:
      p?.properties?.description?.rich_text[0]?.text?.content ||
      "A blog post by Mouhameth Lamotte",
    openGraph: {
      title: p?.properties?.title?.title[0]?.plain_text || "Blog Post",
      description:
        p?.properties?.description?.rich_text[0]?.text?.content ||
        "A blog post by Mouhameth Lamotte",
      url: `https://portfolio.mouhamedlamotte.tech/blog/${slug}`,
      siteName: "Mouhameth Lamotte Portfolio",
      images: [
        {
          url:
            p.properties?.thumb?.rich_text[0]?.text?.content ||
            "https://portfolio.mouhamedlamotte.tech/og.png",
          width: 1200,
          height: 630,
          alt: p?.properties?.title?.title[0]?.plain_text || "Blog Post",
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      site: "@MouhamedLamotly",
      creator: "@MouhamedLamotly",
      title: p?.properties?.title?.title[0]?.plain_text || "Blog Post",
      description:
        p?.properties?.description?.rich_text[0]?.text?.content ||
        "A blog post by Mouhameth Lamotte",
      images: [
        {
          url:
            p.properties?.thumb?.rich_text[0]?.text?.content ||
            "https://portfolio.mouhamedlamotte.tech/og.png",
          width: 1200,
          height: 630,
          alt: p?.properties?.title?.title[0]?.plain_text || "Blog Post",
        },
      ],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!params || !slug) {
    return notFound();
  }

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

  // Injecter bouton copier dans chaque <pre><code>...</code></pre>
 

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);
  const htmlWithCopy = addCopyButtonsToCodeBlocks(html);


  const p: any = post;

  console.log(p?.properties?.tags?.multi_select);

  return (
    <>
      <Section>
        <article className="max-w-6xl mx-auto mt-4">
          <h1 className="text-4xl font-bold mb-4">
            {p?.properties?.title?.title[0]?.plain_text as unknown as string}
          </h1>
          <div className="mb-6 flex flex-col items-start space-y-2 md:flex-row md:items-center ">
            <div className="flex items-start space-x-4  mt-6">
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
              {p?.properties?.tags?.multi_select?.map(
                (tag: { id: string; name: string; color: string }) => (
                  <Badge
                    key={tag.id}
                    variant="outline"
                    style={{ backgroundColor: tag.color }}
                  >
                    {tag.name}
                  </Badge>
                )
              )}
            </div>
          </div>
          <div className="h-[300px]  border rounded-md mt-6 w-fit mb-8 overflow-hidden">
            <img
              src={
                p.properties?.thumb?.rich_text[0]?.text?.content ??
                "/placeholder.svg"
              }
              alt={
                p?.properties?.title?.title[0]?.plain_text as unknown as string
              }
              className="object-contain rounded-lg mb-8 h-full"
            />
          </div>

          <div
            className="prose prose-lg max-w-none dark:prose-invert 
           antialiased subpixel-antialiased
           [&_p]:!text-shadow-none [&_h1]:!text-shadow-none [&_h2]:!text-shadow-none 
           [&_h3]:!text-shadow-none [&_h4]:!text-shadow-none [&_h5]:!text-shadow-none
           [&_li]:!text-shadow-none [&_blockquote]:!text-shadow-none
           [&_span:not(code_span)]:!text-shadow-none
           [&_p]:!mix-blend-normal [&_h1]:!mix-blend-normal [&_h2]:!mix-blend-normal"
            dangerouslySetInnerHTML={{ __html: htmlWithCopy }}
          />
        </article>
      </Section>
    </>
  );
}

function addCopyButtonsToCodeBlocks(html: string): string {
  // Script global pour la gestion de la copie (ajouté une seule fois)
  const globalScript = `
    <script>
      if (!window.copyCodeToClipboard) {
        // Définir les icônes SVG
        const clipboardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>';
        const checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20,6 9,17 4,12"/></svg>';
        
        window.copyCodeToClipboard = function(button, encodedCode) {
          const code = decodeURIComponent(encodedCode);
          const iconSpan = button.querySelector('.copy-icon');
          const textSpan = button.querySelector('.copy-text');
          
          navigator.clipboard.writeText(code).then(() => {
            // Changer l'apparence du bouton (succès)
            iconSpan.innerHTML = checkIcon;
            textSpan.textContent = 'Copié !';
            button.classList.add('bg-green-600', 'hover:bg-green-500', 'border-green-500');
            button.classList.remove('bg-gray-800', 'hover:bg-gray-700', 'border-gray-600');
            
            // Retour à l'état initial après 2 secondes
            setTimeout(() => {
              iconSpan.innerHTML = clipboardIcon;
              textSpan.textContent = 'Copier';
              button.classList.remove('bg-green-600', 'hover:bg-green-500', 'border-green-500');
              button.classList.add('bg-gray-800', 'hover:bg-gray-700', 'border-gray-600');
            }, 2000);
          }).catch(err => {
            console.error('Erreur lors de la copie:', err);
            // Afficher l'erreur temporairement
            textSpan.textContent = 'Erreur';
            button.classList.add('bg-red-600', 'border-red-500');
            button.classList.remove('bg-gray-800', 'border-gray-600');
            
            setTimeout(() => {
              iconSpan.innerHTML = clipboardIcon;
              textSpan.textContent = 'Copier';
              button.classList.remove('bg-red-600', 'border-red-500');
              button.classList.add('bg-gray-800', 'border-gray-600');
            }, 2000);
          });
        };
      }
    </script>
  `;

  // Remplacer chaque bloc de code par un bloc avec bouton de copie
  const htmlWithButtons = html.replace(
    /<pre>(.*?)<code class="language-(.*?)">(.*?)<\/code>(.*?)<\/pre>/gs,
    (match, beforeCode, lang, codeContent, afterCode) => {
      // Nettoyer le contenu du code des balises HTML pour la copie
      const cleanCode = codeContent.replace(/<[^>]*>/g, '');
      
      return `
        <div class="relative group">
          <button 
            class="absolute top-3 right-3 text-xs px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 border border-gray-600 flex items-center gap-2 z-10 shadow-lg font-medium backdrop-blur-sm"
            onclick="copyCodeToClipboard(this, '${encodeURIComponent(cleanCode)}')"
            title="Copier le code dans le presse-papier"
          >
            <span class="copy-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
              </svg>
            </span>
            <span class="copy-text">Copier</span>
          </button>
          <pre>${beforeCode}<code class="language-${lang}">${codeContent}</code>${afterCode}</pre>
        </div>`;
    }
  );

  return globalScript + htmlWithButtons;
}



