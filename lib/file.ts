import { sync } from 'glob'
import matter from 'gray-matter'
import path from 'path'

import { isPostFile, ParsedFile, PostFile } from '@/types/file'

import { DateFnsFormat, formatUTCToDate } from './date'

const STORAGE_PATH = '/storage'
const FILE_PATH = path.join(process.cwd(), STORAGE_PATH)

export const getFile = (category: string, title: string): PostFile => {
  const file = matter.read(`${FILE_PATH}/${category}/${title}/content.mdx`)

  if (!isPostFile(file)) {
    throw new Error('파일 형식이 올바르지 않습니다.')
  }

  const { data, content } = file
  const date = formatUTCToDate(data.date, DateFnsFormat.YYYYMMDD_KR)
  return { data: { ...data, date }, content }
}

export const getFileList = (category?: string): ParsedFile[] => {
  const paths: string[] = sync(
    category ? `${FILE_PATH}/${category}/*.mdx` : `${FILE_PATH}/**/*.mdx`,
  )
  const result = paths.map((filePath) => {
    const folderCategory = filePath.split('/').slice(-3)?.[0] as string
    const folderTitle = filePath.split('/').slice(-2)?.[0] as string

    const file = matter.read(filePath)

    if (!isPostFile(file)) {
      throw new Error('파일 형식이 올바르지 않습니다.')
    }

    const { data, content } = file
    const date = formatUTCToDate(data.date, DateFnsFormat.YYYYMMDD_KR)
    return { folderCategory, folderTitle, data: { ...data, date }, content }
  })
  return result
}

export const getCategoryList = (): string[] => {
  const categoryPaths: string[] = sync(`${FILE_PATH}/*`)
  const categoryList = categoryPaths.map(
    (path) => path.split('/').slice(-1)?.[0] as string,
  )
  return categoryList
}
