import fs from 'fs'
import path from 'path'
import type { Project } from '@/types/project'

function loadProjects(type: 'kisisel' | 'egitim'): Project[] {
  const filePath = path.join(process.cwd(), 'content', 'projects', type, 'projeler.json')
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw) as Project[]
}

export function getKisiselProjeler(): Project[] {
  return loadProjects('kisisel')
}

export function getEgitimProjeleri(): Project[] {
  return loadProjects('egitim')
}
