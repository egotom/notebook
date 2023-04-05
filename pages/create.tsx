import mkdStyles from'../components/markdown-styles.module.css'
import Container from '../components/container'
import ReactMarkdown from 'react-markdown'
import Header from '../components/header'
import Layout from '../components/layout'
import remarkGfm from 'remark-gfm'
import { useState, useRef } from 'react'

type Props = {}

export default function Index({ }: Props) {
  const [text, setVal] = useState<string>("")
  const pvRef = useRef(null)
  const edRef = useRef(null)
  const upRef = useRef(null)

  const scrollAsync = (e:any)=>{
    const pst = e.target.scrollTop / e.target.scrollHeight
    // console.log(e.target.scrollTop,"----",e.target.scrollBottom ,"----",e.target.scrollHeight)
    pvRef.current.scrollTop=pst*pvRef.current.scrollHeight
    edRef.current.scrollTop=pst*edRef.current.scrollHeight
  }

  const upload = (e:any)=>{
    const file = e.target.files[0]
    console.log(file)
    if(file.size>500000){
      alert("文件太大请压缩后上传！")
      return
    }

  }
  return (
    <Layout>
      <Container>
        <Header />
        <div className="w-full flex gap-3 p-2 bg-gray-300 border border-blue-600 rounded-t">
          <button className='rounded px-2 py-1 text-sm bg-blue-600 hover:bg-blue-500 text-gray-200 hover:text-white'
            >保存</button>
          <button className='rounded px-2 py-1 text-sm bg-blue-600 hover:bg-blue-500 text-gray-200 hover:text-white'
            onClick={()=>upRef.current.click()}>插入图片</button>
          <input type="file" accept="image/*" className='hidden' ref={upRef} onChange={upload}/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white ">
          <div className="h-screen overflow-auto p-2 border border-blue-600 shadow"
            ref={pvRef} onScroll={scrollAsync} >
            <ReactMarkdown 
              children={text} 
              remarkPlugins={[remarkGfm]} 
              className={mkdStyles['markdown']}
            />
          </div>
          <textarea className='w-full h-screen border border-blue-600 p-3 outline-none shadow' 
            ref={edRef} onScroll={scrollAsync} value={text} onChange={(e)=>setVal(e.target.value)} spellCheck="false">
          </textarea>           
        </div>
      </Container>
    </Layout>
  )
}



// markdown 测试内容
// --------------------------
// Name | Lunch order | Spicy      | Owes
// ------- | ---------------- | ---------- | ---------:
// Joan  | saag paneer | medium | $11
// Sally  | vindaloo        | mild       | $14
// Erin   | lamb madras | HOT      | $5

// There are **multiple syntax highlighting themes** to choose from. Here's one of them:

// ```javascript
// // All the code you will ever need
// var hw = "Hello World!"
// alert(hw);
// ```
// My math is so rusty that I barely remember the _quadratic equation_:
// $-b \pm \sqrt{b^2 - 4ac} \over 2a$


// This is just a sample. You can play around with your own text right here.

// Markdown
// -------------

// ...is really just ordinary text, *plain and simple*. How is it good for you?

// - You just **type naturally**, and the result looks good.
// - You **don't have to worry** about clicking formatting buttons.
//   - Or fiddling with indentation. (Two spaces is all you need.)

// To see what else you can do with Markdown (including **tables**, **images**, **numbered lists**, and more) take a look at the [Cheatsheet][1]. And then try it out by typing in this box!

// [1]: https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet