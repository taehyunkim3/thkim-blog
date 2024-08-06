export interface FrontMatter {
  date: string
  title: string
  description: string
  [key: string]: any // 추가적인 데이터 필드를 허용
}

export interface PostFile {
  data: FrontMatter
  content: string
}

export interface ParsedFile {
  folderCategory: string
  folderTitle: string
  data: FrontMatter
  content: string
}

// 타입 가드 함수 정의
export function isPostFile(file: any): file is PostFile {
  return file && typeof file === 'object' && 'data' in file && 'content' in file
}
