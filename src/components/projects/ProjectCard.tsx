import Link from 'next/link'
import { BookOpen, Code2, ExternalLink } from 'lucide-react'
import type { Project } from '@/types/project'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  // Site içi bağlantı ("/..."): aynı sekmede client-side gezinme; dış URL: yeni sekme.
  const isInternal = project.url?.startsWith('/')

  return (
    <div className="bg-white border border-[var(--color-brand-200)] rounded-xl p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-[var(--color-brand-700)] leading-snug">{project.title}</h3>
        <span className="text-xs text-[var(--color-brand-500)] shrink-0">{project.year}</span>
      </div>
      <p className="text-sm text-[var(--color-brand-500)] mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-[var(--color-brand-100)] text-[var(--color-brand-700)] rounded-full px-2.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.url &&
          (isInternal ? (
            <Link
              href={project.url}
              className="inline-flex items-center gap-1.5 text-xs text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors font-medium"
            >
              <BookOpen size={13} />
              Rehberi Aç
            </Link>
          ) : (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors font-medium"
            >
              <ExternalLink size={13} />
              Projeyi Gör
            </a>
          ))}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--color-brand-500)] hover:text-[var(--color-brand-700)] transition-colors"
          >
            <Code2 size={13} />
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}
