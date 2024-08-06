'use client'
import { useRouter } from 'next/navigation'

import { ParsedFile } from '@/types/file'

type PostCardProps = {
  parsedFile: ParsedFile
}

const PostCard = ({ parsedFile }: PostCardProps) => {
  const { data, content, folderCategory, folderTitle } = parsedFile
  const router = useRouter()

  const handleClick = () => {
    router.push(`/posts/${folderCategory}/${folderTitle}`)
  }

  return (
    <div
      className="flex cursor-pointer flex-col gap-1 border shadow"
      onClick={handleClick}
    >
      <h1 className="text-xl">{data.title}</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default PostCard
