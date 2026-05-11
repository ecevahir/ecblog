import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Mail } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="flex flex-col-reverse sm:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm font-medium text-[var(--color-accent)] mb-2 tracking-wide uppercase">
            Bilişim Teknolojileri Öğretmeni
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-brand-700)] mb-4 leading-tight">
            Merhaba, ben <span className="text-[var(--color-accent)]">Emre CEVAHİR</span>
          </h1>
          <p className="text-[var(--color-brand-500)] mb-6 leading-relaxed max-w-lg">
            Bilişim Teknolojileri öğretmeniyim. Kodlama, algoritmik düşünme, siber güvenlik ve
            dijital okuryazarlık konularında dersler veriyorum. Bu blogda öğretme yolculuğumu,
            ders notlarımı ve projelerimi paylaşıyorum.
          </p>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Yazılarımı Oku
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 border border-[var(--color-brand-300)] text-[var(--color-brand-700)] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[var(--color-brand-100)] transition-colors"
            >
              <Mail size={15} />
              İletişime Geç
            </Link>
          </div>
        </div>

        {/* Photo */}
        <div className="shrink-0">
          <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-[var(--color-brand-200)] shadow-md bg-[var(--color-brand-100)] flex items-center justify-center">
            <Image
              src="/foto.jpg"
              alt="Profil fotoğrafı"
              width={208}
              height={208}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
