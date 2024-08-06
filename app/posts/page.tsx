import { getFileList } from '@/lib/file'

import PostCard from './_components/post-card'

const BlogPage = () => {
  const files = getFileList()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1>POSTS</h1>

      <div className="flex flex-col gap-2 border p-3">
        {files.map((file, index) => {
          return <PostCard parsedFile={file} key={index} />
        })}
      </div>
    </main>
  )
}

export default BlogPage
