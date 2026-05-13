import { config, collection, fields } from '@keystatic/core'

const projectSchema = {
  title: fields.slug({ name: { label: 'Başlık' } }),
  description: fields.text({ label: 'Açıklama', multiline: true }),
  tags: fields.array(fields.text({ label: 'Etiket' }), {
    label: 'Etiketler',
    itemLabel: (props) => props.value,
  }),
  url: fields.url({ label: 'Proje URL (opsiyonel)' }),
  github: fields.url({ label: 'GitHub URL (opsiyonel)' }),
  year: fields.integer({ label: 'Yıl', defaultValue: new Date().getFullYear() }),
}

export default config({
  storage:
    process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND === 'github'
      ? { kind: 'github', repo: 'ecevahir/ecblog' }
      : { kind: 'local' },

  ui: {
    brand: { name: 'Blog Yönetimi' },
    navigation: {
      'İçerik': ['blog'],
      'Projeler': ['kisiselProjeler', 'egitimProjeleri'],
    },
  },

  collections: {
    blog: collection({
      label: 'Blog Yazıları',
      slugField: 'title',
      path: 'content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Başlık' } }),
        date: fields.date({ label: 'Tarih' }),
        category: fields.text({ label: 'Kategori' }),
        tags: fields.array(fields.text({ label: 'Etiket' }), {
          label: 'Etiketler',
          itemLabel: (props) => props.value,
        }),
        excerpt: fields.text({ label: 'Özet', multiline: true }),
        featured: fields.checkbox({ label: 'Öne Çıkarılan', defaultValue: false }),
        content: fields.mdx({ label: 'İçerik' }),
      },
    }),

    kisiselProjeler: collection({
      label: 'Kişisel Projeler',
      slugField: 'title',
      path: 'content/projects/kisisel/*',
      format: 'json',
      schema: projectSchema,
    }),

    egitimProjeleri: collection({
      label: 'Eğitim Projeleri',
      slugField: 'title',
      path: 'content/projects/egitim/*',
      format: 'json',
      schema: projectSchema,
    }),
  },
})
