import Link from 'next/link'
import { Code2, Briefcase, X, Mail } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Hakkımda' },
  { href: '/blog', label: 'Yazılar' },
  { href: '/projeler', label: 'Projeler' },
  { href: '/iletisim', label: 'İletişim' },
]

const socialLinks = [
  { href: 'https://github.com/kullanici', icon: <Code2 size={18} />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/kullanici', icon: <Briefcase size={18} />, label: 'LinkedIn' },
  { href: 'https://twitter.com/kullanici', icon: <X size={18} />, label: 'Twitter / X' },
  { href: 'mailto:ogretmen@example.com', icon: <Mail size={18} />, label: 'E-posta' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-brand-200)] bg-[var(--color-brand-50)] mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-semibold text-[var(--color-brand-700)] mb-1">BT Öğretmeni</p>
            <p className="text-sm text-[var(--color-brand-500)]">
              Bilişim Teknolojileri öğretmeni. Kodlama, algoritmik düşünme ve dijital okuryazarlık
              üzerine yazılar.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-500)] mb-3">
              Sayfalar
            </p>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-brand-700)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-500)] mb-3">
              Bağlantılar
            </p>
            <ul className="space-y-1.5">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[var(--color-brand-700)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-xs text-[var(--color-brand-500)] text-center border-t border-[var(--color-brand-200)] pt-6">
          © {year} BT Öğretmeni. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}
