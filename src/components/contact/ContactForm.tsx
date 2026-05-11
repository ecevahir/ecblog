'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full border border-[var(--color-brand-200)] rounded-lg px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[var(--color-brand-700)] mb-1">
            Ad Soyad *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Adınız Soyadınız"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-brand-700)] mb-1">
            E-posta *
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="ornek@email.com"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--color-brand-700)] mb-1">
          Konu *
        </label>
        <input
          type="text"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          placeholder="Mesajınızın konusu"
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--color-brand-700)] mb-1">
          Mesaj *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Mesajınızı buraya yazın..."
          className={inputClass}
        />
      </div>

      {status === 'success' && (
        <p className="text-sm text-[var(--color-accent)] bg-[var(--color-brand-100)] rounded-lg px-4 py-3">
          Mesajınız iletildi! En kısa sürede geri döneceğim.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">
          Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send size={14} />
        {status === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
      </button>
    </form>
  )
}
