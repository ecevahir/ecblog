import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { BlogPost, BlogFrontmatter } from '@/types/blog'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

// js-yaml ISO tarihleri Date objesine çevirebiliyor (Vercel build'inde olduğu gibi)
// Frontmatter'daki date alanını her zaman "YYYY-MM-DD" string'ine normalize et.
function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  if (typeof value === 'string') return value
  return String(value)
}

function readPost(filename: string): { frontmatter: BlogFrontmatter; content: string } {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8')
  const { data, content } = matter(raw)
  const fm = data as Record<string, unknown>
  const frontmatter: BlogFrontmatter = {
    ...(fm as unknown as BlogFrontmatter),
    date: normalizeDate(fm.date),
  }
  return { frontmatter, content }
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const { frontmatter, content } = readPost(filename)
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
  return readPost(`${slug}.mdx`)
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
