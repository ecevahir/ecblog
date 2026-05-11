'use client'

import { useState } from 'react'
import type { BlogPost } from '@/types/blog'
import PostCard from './PostCard'

interface Props {
  posts: BlogPost[]
  categories: string[]
}

export default function CategoryFilter({ posts, categories }: Props) {
  const [active, setActive] = useState<string | null>(null)

  const filtered = active ? posts.filter((p) => p.category === active) : posts

  return (
    <div>
      {/* Category buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActive(null)}
          className={`px-3.5 py-1.5 text-sm rounded-full transition-colors ${
            !active
              ? 'bg-[var(--color-accent)] text-white'
              : 'bg-[var(--color-brand-100)] text-[var(--color-brand-700)] hover:bg-[var(--color-brand-200)]'
          }`}
        >
          Tümü
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(active === cat ? null : cat)}
            className={`px-3.5 py-1.5 text-sm rounded-full transition-colors ${
              active === cat
                ? 'bg-[var(--color-accent)] text-white'
                : 'bg-[var(--color-brand-100)] text-[var(--color-brand-700)] hover:bg-[var(--color-brand-200)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-[var(--color-brand-500)] text-sm">Bu kategoride henüz yazı yok.</p>
      )}
    </div>
  )
}
