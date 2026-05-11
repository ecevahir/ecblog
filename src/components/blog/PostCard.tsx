import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import type { BlogPost } from '@/types/blog'
import { formatDateTR } from '@/lib/utils'
import TagBadge from './TagBadge'

interface Props {
  post: BlogPost
}

export default function PostCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white border border-[var(--color-brand-200)] rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <span className="inline-block text-xs font-medium text-[var(--color-accent)] bg-[var(--color-brand-100)] rounded-full px-2.5 py-0.5 mb-3">
        {post.category}
      </span>
      <h2 className="font-semibold text-[var(--color-brand-700)] group-hover:text-[var(--color-accent)] transition-colors mb-2 leading-snug">
        {post.title}
      </h2>
      <p className="text-sm text-[var(--color-brand-500)] mb-4 line-clamp-2">{post.excerpt}</p>
      <div className="flex items-center gap-3 text-xs text-[var(--color-brand-500)]">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {formatDateTR(post.date)}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {post.readingTime}
        </span>
      </div>
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {post.tags.slice(0, 3).map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      )}
    </Link>
  )
}
