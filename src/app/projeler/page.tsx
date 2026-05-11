import type { Metadata } from 'next'
import { getKisiselProjeler, getEgitimProjeleri } from '@/lib/projects'
import ProjectSection from '@/components/projects/ProjectSection'

export const metadata: Metadata = {
  title: 'Projeler',
  description: 'Kişisel ve eğitim projelerim.',
}

export default function ProjelerPage() {
  const kisisel = getKisiselProjeler()
  const egitim = getEgitimProjeleri()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <ProjectSection
        title="Kişisel Projeler"
        subtitle="Kendi ihtiyaçlarım için geliştirdiğim yazılım projeleri"
        projects={kisisel}
      />
      <ProjectSection
        title="Eğitim Projeleri"
        subtitle="Öğrencilerimle birlikte yürüttüğüm ve sınıfa katkı sağlayan projeler"
        projects={egitim}
      />
    </div>
  )
}
