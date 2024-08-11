import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'

import { MdxComponents } from '@/components/mdx'
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
      <MDXRemote
        source={content}
        components={MdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: { dark: 'github-dark-dimmed', light: 'github-light' },
                },
              ],
              rehypeSlug,
            ],
          },
        }}
      />
      <h1>Detail Content</h1>
    </div>
  )
}

export default DetailContent
