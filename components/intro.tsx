import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 px-10">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
        笔记本
      </h1>
      <h4 className="text-blue-600 text-center md:text-left text-lg mt-5 md:pl-8 ">
        一个使用{' '}{CMS_NAME} 驱动的记事本.
      </h4>
    </section>
  )
}

export default Intro
