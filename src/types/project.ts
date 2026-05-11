export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  url?: string
  github?: string
  year: number
  type: 'kisisel' | 'egitim'
  image?: string
}
