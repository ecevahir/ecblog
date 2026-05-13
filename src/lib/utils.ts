import { format, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'

export function formatDateTR(isoDate: string | Date): string {
  const d = isoDate instanceof Date ? isoDate : parseISO(String(isoDate))
  return format(d, 'd MMMM yyyy', { locale: tr })
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
