import fs from 'fs'
import path from 'path'
import type { Project } from '@/types/project'

function loadProjects(type: 'kisisel' | 'egitim'): Project[] {
  const dir = path.join(process.cwd(), 'content', 'projects', type)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'))

  const projects = files.map<Project>((filename) => {
    const id = filename.replace(/\.json$/, '')
    const raw = fs.readFileSync(path.join(dir, filename), 'utf-8')
    const data = JSON.parse(raw) as Omit<Project, 'id' | 'type'>
    return { ...data, id, type }
  })

  // Yıla göre azalan, sonra başlığa göre artan
  return projects.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year
    return a.title.localeCompare(b.title, 'tr')
  })
}

export function getKisiselProjeler(): Project[] {
  return loadProjects('kisisel')
}

export function getEgitimProjeleri(): Project[] {
  return loadProjects('egitim')
}
