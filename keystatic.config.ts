import { config, collection, fields } from '@keystatic/core'

export default config({
  storage:
    process.env.KEYSTATIC_GITHUB_CLIENT_ID
      ? { kind: 'github', repo: 'ecevahir/ecblog' }
      : { kind: 'local' },

  ui: {
    brand: { name: 'Blog Yönetimi' },
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
        }),
        excerpt: fields.text({ label: 'Özet', multiline: true }),
        featured: fields.checkbox({ label: 'Öne Çıkarılan', defaultValue: false }),
        content: fields.mdx({ label: 'İçerik' }),
      },
    }),
  },
})
