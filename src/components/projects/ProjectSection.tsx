import type { Project } from '@/types/project'
import ProjectCard from './ProjectCard'
import SectionHeading from '@/components/ui/SectionHeading'

interface Props {
  title: string
  subtitle?: string
  projects: Project[]
}

export default function ProjectSection({ title, subtitle, projects }: Props) {
  return (
    <section className="mb-14">
      <SectionHeading title={title} subtitle={subtitle} />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
