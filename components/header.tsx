import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'

const Header = () => {
  return (
    <section className="flex justify-between items-center ">
      <div className="flex-col flex mt-16 mb-16 md:mb-12">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
            <Link href="/" className="hover:underline">
              笔记本.
            </Link>
        </h1>
        <h4 className="text-blue-500 text-center md:text-left text-lg mt-3">
          一个使用 {CMS_NAME} 驱动的记事本.
        </h4>
      </div>
      <Link href="/create" className="hover:underline font-semibold">
        创建笔记本
      </Link>
    </section>
    
  )
}

export default Header
