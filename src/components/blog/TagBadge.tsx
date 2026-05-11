'use client'

interface Props {
  tag: string
  active?: boolean
  onClick?: () => void
}

export default function TagBadge({ tag, active = false, onClick }: Props) {
  const base =
    'inline-block text-xs rounded-full px-2.5 py-0.5 transition-colors cursor-pointer select-none'
  const style = active
    ? 'bg-[var(--color-accent)] text-white'
    : 'bg-[var(--color-brand-100)] text-[var(--color-brand-700)] hover:bg-[var(--color-brand-200)]'

  return (
    <span className={`${base} ${style}`} onClick={onClick}>
      #{tag}
    </span>
  )
}
