import { ko } from 'date-fns/locale'
import { formatInTimeZone } from 'date-fns-tz'

export enum DateFnsFormat {
  /** 2024년 12월 31일 */
  YYYYMMDD_KR = `yyyy년 MM월 dd일`,
}

export function formatUTCToDate(
  utcDate: string | undefined,
  format: DateFnsFormat,
) {
  if (!utcDate) {
    return '-'
  }
  return formatInTimeZone(
    new Date(utcDate.toLocaleString()),
    'Asia/Seoul',
    format,
    { locale: ko },
  )
}
