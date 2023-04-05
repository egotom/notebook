import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'

const Header = () => {
  return (
    <section className=" bg-slate-300">
      <div className="container mx-auto px-5 flex-col flex pt-8 md:mb-6 w-full">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
            <Link href="/" className="hover:underline">
              笔记本.
            </Link>
        </h1>
        <div className="flex justify-between items-center my-3">
          <h4 className="text-blue-500 text-center md:text-left">
            一个使用 {CMS_NAME} 驱动的记事本.
          </h4>
          <Link href="/create" className="hover:underline font-semibold text-blue-600">
          创建新笔记
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Header
