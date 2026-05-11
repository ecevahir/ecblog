import { Calendar, Clock, Tag } from 'lucide-react'
import type { BlogPost } from '@/types/blog'
import { formatDateTR } from '@/lib/utils'
import TagBadge from './TagBadge'

interface Props {
  post: BlogPost
}

export default function PostHeader({ post }: Props) {
  return (
    <div className="mb-10">
      <span className="inline-block text-xs font-medium text-[var(--color-accent)] bg-[var(--color-brand-100)] rounded-full px-2.5 py-0.5 mb-3">
        {post.category}
      </span>
      <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-brand-700)] leading-snug mb-4">
        {post.title}
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-brand-500)] pb-6 border-b border-[var(--color-brand-200)]">
        <span className="flex items-center gap-1.5">
          <Calendar size={14} />
          {formatDateTR(post.date)}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={14} />
          {post.readingTime} okuma
        </span>
        <span className="flex items-center gap-1.5">
          <Tag size={14} />
          <span className="flex gap-1.5 flex-wrap">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </span>
        </span>
      </div>
    </div>
  )
}
