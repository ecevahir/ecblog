export interface BlogFrontmatter {
  title: string
  date: string
  category: string
  tags: string[]
  excerpt: string
  coverImage?: string
  featured?: boolean
}

export interface BlogPost extends BlogFrontmatter {
  slug: string
  readingTime: string
  content: string
}
