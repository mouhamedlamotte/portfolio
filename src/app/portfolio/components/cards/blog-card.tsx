import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {  ArrowRight, CalendarIcon } from 'lucide-react'
import Link from "next/link"

interface BlogCardProps {
  imageUrl: string
  title: string
  excerpt: string
  author: {
    name: string
    avatarUrl: string
  }
  date: string
  href: string
}

export default function BlogCard({ imageUrl, title, excerpt, author, date, href }: BlogCardProps) {
  return (
    <Card className="flex flex-col  max-w-sm overflow-hidden transition-all hover:shadow-lg h-full">
      <div className="h-40 bg-[url('/placeholder.svg')]">
      <img 
        title="image"
        src={imageUrl} 
        className="w-full  object-cover h-full"
      />
      </div>
      <CardHeader>
        <h3 className="font-semibold line-clamp-2">{title}</h3>
      </CardHeader>
      <CardContent className="mt-auto">
        <p className="text-muted-foreground line-clamp-3 mb-4 text-sm">{excerpt}</p>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={author.avatarUrl} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {date}
            </div>
          </div>
        </div>
      </CardContent >
      <CardFooter className="mt-auto">
        <Button variant="link">
          <Link prefetch={false} href={href}>
        Lire la suite
          </Link>
        <ArrowRight/>
        </Button>
      </CardFooter>
    </Card>
  )
}


