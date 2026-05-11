import type { Metadata } from 'next'
import { Mail, Briefcase, Code2, X } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Benimle iletişime geçin.',
}

const socialLinks = [
  {
    icon: <Mail size={18} />,
    label: 'ogretmen@example.com',
    href: 'mailto:ogretmen@example.com',
  },
  {
    icon: <Briefcase size={18} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kullanici',
  },
  {
    icon: <Code2 size={18} />,
    label: 'GitHub',
    href: 'https://github.com/kullanici',
  },
  {
    icon: <X size={18} />,
    label: 'Twitter / X',
    href: 'https://twitter.com/kullanici',
  },
]

export default function IletisimPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeading
        title="İletişim"
        subtitle="Sorularınız, işbirliği teklifleriniz veya sadece merhaba demek için yazabilirsiniz."
      />

      <div className="grid sm:grid-cols-2 gap-12">
        {/* Social links */}
        <div>
          <h2 className="text-base font-semibold text-[var(--color-brand-700)] mb-4">
            Doğrudan Ulaşın
          </h2>
          <ul className="space-y-3">
            {socialLinks.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-[var(--color-brand-700)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <span className="text-[var(--color-accent)]">{s.icon}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-base font-semibold text-[var(--color-brand-700)] mb-4">
            Mesaj Gönderin
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
