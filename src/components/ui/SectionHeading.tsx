interface Props {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-[var(--color-brand-700)] mb-1">{title}</h2>
      <div className="h-1 w-12 bg-[var(--color-accent)] rounded-full mb-3" />
      {subtitle && <p className="text-[var(--color-brand-500)]">{subtitle}</p>}
    </div>
  )
}
