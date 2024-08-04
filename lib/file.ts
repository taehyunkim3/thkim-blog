import { sync } from 'glob'
import matter from 'gray-matter'
import path from 'path'

import { DateFnsFormat, formatUTCToDate } from './date'

const STORAGE_PATH = '/storage'
const FILE_PATH = path.join(process.cwd(), STORAGE_PATH)

export const getFile = (category: string, title: string) => {
  const file = matter.read(`${FILE_PATH}/${category}/${title}/content.mdx`)

  const { data, content } = file

  const date = formatUTCToDate(data.date, DateFnsFormat.YYYYMMDD_KR)
  return { data: { ...data, date }, content }
}

export const getFileList = (category?: string) => {
  const paths: string[] = sync(
    category ? `${FILE_PATH}/${category}/*.mdx` : `${FILE_PATH}/**/*.mdx`,
  )
  const result = paths.map((filePath) => {
    const category = filePath.split('/').slice(-2)?.[0]
    const title = filePath.split('/').slice(-1)?.[0]
    const file = matter.read(filePath)
    const { data, content } = file
    const date = formatUTCToDate(data.date, DateFnsFormat.YYYYMMDD_KR)
    return { category, title, data: { ...data, date }, content }
  })
  return result
}

export const getCategoryList = () => {
  const categoryPaths: string[] = sync(`${FILE_PATH}/*`)
  const categoryList = categoryPaths.map(
    (path) => path.split('/').slice(-1)?.[0],
  )
  return categoryList
}
