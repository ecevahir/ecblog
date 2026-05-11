import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getPostBySlug, getAllPosts } from '@/lib/mdx'
import PostHeader from '@/components/blog/PostHeader'
import type { BlogPost } from '@/types/blog'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { frontmatter } = getPostBySlug(slug)
    return {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      openGraph: { title: frontmatter.title, description: frontmatter.excerpt },
    }
  } catch {
    return {}
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  let post: BlogPost
  let content: string
  try {
    const allPosts = getAllPosts()
    const found = allPosts.find((p) => p.slug === slug)
    if (!found) return notFound()
    post = found
    const result = getPostBySlug(slug)
    content = result.content
  } catch {
    return notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <PostHeader post={post} />
      <article className="prose prose-stone max-w-none prose-headings:text-[var(--color-brand-700)] prose-a:text-[var(--color-accent)] prose-code:text-[var(--color-accent)] prose-blockquote:border-[var(--color-accent)]">
        <MDXRemote source={content} />
      </article>
    </div>
  )
}
