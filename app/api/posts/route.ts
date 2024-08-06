import { getFile } from '@/lib/file'

type Params = {
  category: string
  title: string
}

export async function GET(request: Request, context: { params: Params }) {
  const { category, title } = context.params
  const data = getFile(category, title)
  return {
    status: 200,
    body: data,
  }
}
