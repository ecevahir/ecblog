import HeroSection from '@/components/home/HeroSection'
import FeaturedPosts from '@/components/home/FeaturedPosts'
import { getAllPosts } from '@/lib/mdx'

export default function HomePage() {
  const posts = getAllPosts().slice(0, 4)
  return (
    <>
      <HeroSection />
      <FeaturedPosts posts={posts} />
    </>
  )
}
