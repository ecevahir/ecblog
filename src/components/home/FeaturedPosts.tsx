import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { BlogPost } from '@/types/blog'
import PostCard from '@/components/blog/PostCard'
import SectionHeading from '@/components/ui/SectionHeading'

interface Props {
  posts: BlogPost[]
}

export default function FeaturedPosts({ posts }: Props) {
  if (posts.length === 0) return null

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t border-[var(--color-brand-200)]">
      <div className="flex items-end justify-between mb-2">
        <SectionHeading title="Son Yazılar" />
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors mb-10"
        >
          Tümünü Gör <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
