import type { Metadata } from 'next'
import { getAllPosts, getAllCategories } from '@/lib/mdx'
import CategoryFilter from '@/components/blog/CategoryFilter'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Yazılar',
  description: 'Bilişim teknolojileri, kodlama ve dijital eğitim üzerine makaleler.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeading
        title="Yazılar"
        subtitle="Kodlama, siber güvenlik ve dijital eğitim üzerine notlar"
      />
      <CategoryFilter posts={posts} categories={categories} />
    </div>
  )
}
