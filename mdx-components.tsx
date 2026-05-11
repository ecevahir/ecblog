import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        className="text-xl font-bold text-[var(--color-brand-700)] mt-8 mb-3"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-lg font-semibold text-[var(--color-brand-700)] mt-6 mb-2"
        {...props}
      />
    ),
    a: (props) => (
      <a
        className="text-[var(--color-accent)] hover:underline"
        target={props.href?.startsWith('http') ? '_blank' : undefined}
        rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-[var(--color-accent)] pl-4 italic text-[var(--color-brand-500)]"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="bg-[var(--color-brand-100)] text-[var(--color-accent)] rounded px-1 py-0.5 text-sm font-mono"
        {...props}
      />
    ),
    ...components,
  }
}
