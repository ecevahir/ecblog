import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { BlogPost, BlogFrontmatter } from '@/types/blog'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8')
    const { data, content } = matter(raw)
    const frontmatter = data as BlogFrontmatter
    const stats = readingTime(content)
    const minutes = Math.ceil(stats.minutes)

    return {
      ...frontmatter,
      slug,
      readingTime: `${minutes} dakika`,
      content,
    } as BlogPost
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): { frontmatter: BlogFrontmatter; content: string } {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf-8')
  const { data, content } = matter(raw)
  return { frontmatter: data as BlogFrontmatter, content }
}

export function getAllSlugs(): string[] {
  return fs.readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getAllCategories(): string[] {
  return [...new Set(getAllPosts().map((p) => p.category))]
}

export function getAllTags(): string[] {
  return [...new Set(getAllPosts().flatMap((p) => p.tags))]
}
