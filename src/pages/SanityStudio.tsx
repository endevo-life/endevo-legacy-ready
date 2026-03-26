import { Studio } from 'sanity'
import { sanityConfig } from '@/sanity/sanity.config'

export default function SanityStudioPage() {
  return (
    <div style={{ height: '100vh' }}>
      <Studio config={sanityConfig} />
    </div>
  )
}
