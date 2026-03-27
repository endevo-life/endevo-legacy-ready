import { useQuery } from '@tanstack/react-query'
import { sanityClient } from '@/lib/sanityClient'
import type { PortableTextBlock } from '@portabletext/react'
import type { SanityImageRef } from './useBlogPosts'

export interface SanityPodcastEpisode {
  _id: string
  title: string
  guestName?: string
  date: string
  videoUrl?: string
  videoType?: 'long' | 'short'
  coverImage?: SanityImageRef
  description?: PortableTextBlock[]
}

const QUERY = `*[_type == "podcastEpisode"] | order(date desc) {
  _id, title, guestName, date, videoUrl, videoType, coverImage, description
}`

export function usePodcastEpisodes() {
  return useQuery({
    queryKey: ['podcastEpisodes'],
    queryFn: () => sanityClient.fetch<SanityPodcastEpisode[]>(QUERY),
    staleTime: 1000 * 60 * 5,
  })
}
