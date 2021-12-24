import dayjs from 'dayjs'

export const isDark = useDark()

export function formatDate(d: string | Date) {
  const date = dayjs(d)
  if (date.year() === dayjs().year()) return date.format('D MMM')
  return date.format('D MMM YYYY')
}
