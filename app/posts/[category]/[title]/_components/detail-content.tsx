import { MDXRemote } from 'next-mdx-remote/rsc'

import { getFile } from '@/lib/file'

const DetailContent = ({
  params,
}: {
  params: { category: string; title: string }
}) => {
  const {
    data: { date, title, description },
    content,
  } = getFile(params.category, params.title)

  return (
    <div>
      <MDXRemote source={content} />
      <h1>Detail Content</h1>
    </div>
  )
}

export default DetailContent
