import { format, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'

export function formatDateTR(isoDate: string): string {
  return format(parseISO(isoDate), 'd MMMM yyyy', { locale: tr })
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
