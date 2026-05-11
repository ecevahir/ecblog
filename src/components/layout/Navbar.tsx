'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Monitor } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Hakkımda' },
  { href: '/blog', label: 'Yazılar' },
  { href: '/projeler', label: 'Projeler' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-brand-50)]/90 backdrop-blur-sm border-b border-[var(--color-brand-200)]">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-[var(--color-brand-700)] hover:text-[var(--color-accent)] transition-colors"
        >
          <Monitor size={20} className="text-[var(--color-accent)]" />
          <span>Emre CEVAHİR</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  isActive(link.href)
                    ? 'font-semibold text-[var(--color-accent)] bg-[var(--color-brand-100)]'
                    : 'text-[var(--color-brand-700)] hover:text-[var(--color-accent)] hover:bg-[var(--color-brand-100)]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="sm:hidden text-[var(--color-brand-700)] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menüyü aç/kapat"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-[var(--color-brand-200)] bg-[var(--color-brand-50)] px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded-md text-sm transition-colors ${
                isActive(link.href)
                  ? 'font-semibold text-[var(--color-accent)] bg-[var(--color-brand-100)]'
                  : 'text-[var(--color-brand-700)] hover:bg-[var(--color-brand-100)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
