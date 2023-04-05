import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center text-3xl">
      {children}
    </h1>
  )
}

export default PostTitle
