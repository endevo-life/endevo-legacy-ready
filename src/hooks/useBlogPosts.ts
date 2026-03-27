import { useQuery } from '@tanstack/react-query'
import { sanityClient } from '@/lib/sanityClient'
import type { PortableTextBlock } from '@portabletext/react'

export interface SanityImageRef {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number }
}

export interface SanityBlogPost {
  _id: string
  title: string
  date: string
  externalLink?: string
  image: SanityImageRef
  content?: PortableTextBlock[]
}

const QUERY = `*[_type == "blogPost"] | order(date desc) {
  _id, title, date, externalLink, image, content
}`

export function useBlogPosts() {
  return useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => sanityClient.fetch<SanityBlogPost[]>(QUERY),
    staleTime: 1000 * 60 * 5,
  })
}
