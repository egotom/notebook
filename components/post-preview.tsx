import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({title,  coverImage,  date,  excerpt,  author,  slug}: Props) => {
  return (
    <div className='flex items-center gap-10 w-full bg-white p-3 rounded-lg shadow-inner'>
      <div className="mb-5 w-50 h-50">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="text-xl mb-3 leading-snug ">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h3>
        <div className="mb-4 text-sm flex items-center gap-6">
          <Avatar name={author.name} picture={author.picture} />
          <DateFormatter dateString={date} />
        </div>
        <p className=" leading-relaxed mb-4">{excerpt}</p>
      </div>
      
    </div>
  )
}

export default PostPreview
