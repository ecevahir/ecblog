import { ExternalLink as ExternalLinkIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
  href: string
  label: string
  icon?: ReactNode
  className?: string
}

export default function ExternalLink({ href, label, icon, className = '' }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors ${className}`}
    >
      {icon}
      {label}
      <ExternalLinkIcon size={14} />
    </a>
  )
}
