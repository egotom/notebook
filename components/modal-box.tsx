import {useState} from 'react'

type Props = {
    handleClose:Function,
    show?: boolean,
    children: React.ReactNode
}

export default function Modal({ handleClose, show, children }: Props){
  const [sum, setSum] = useState({title:"",excerpt:"",keys:""})

  const handleOk = ()=>{console.log(sum)
    if(sum.title.trim()!=='' && sum.excerpt.trim()!=='' && sum.keys.trim()!==''){
      
      handleClose(sum)
    }
  }

  const handleChange = (e:any)=>{
    const{name,value} = e.target 
    setSum({...sum, [name]:value})
  }

  return (
    <div className={show?"fixed inset-0 w-screen h-screen bg-gray-400/60":"hidden"}>
      <section className="fixed w-1/2 h-1/2 inset-1/4 bg-gray-200 p-6 rounded-lg">
        {children?children:<>
          <div className="flex flex-col justify-between items-center h-full">
            <div className="flex justify-center font-semibold text-lg text-blue-600 my-3">
              创建新笔记
            </div>
            <div className="flex flex-col justify-center my-6 w-full">
              <div className="flex justify-center items-center gap-10 my-2">
                <p className='text-right w-28 text-blue-600'>笔记标题</p>
                <input type="text" onChange={handleChange} spellCheck="false" name="title" 
                className='outline-blue-600 border border-blue-400 w-3/5 p-1'/>
              </div>
              <div className="flex justify-center items-center gap-10 my-4">
                <p className='text-right w-28 text-blue-600'>笔记摘要</p>
                <input type="text" onChange={handleChange} spellCheck="false" name="excerpt"
                className='outline-blue-600 border border-blue-400 w-3/5 p-1'/>
              </div>
              <div className="flex justify-center items-center gap-10 my-2">
                <p className='text-right w-28 text-blue-600'>关键词</p>
                <input type="text" onChange={handleChange} spellCheck="false" name="keys" placeholder='请输入关键词，空格分隔。'
                className='outline-blue-600 border border-blue-400 w-3/5 p-1'/>
              </div>
            </div>
            <div className="flex justify-center my-6">
              <button type="button" onClick={handleOk} className='text-white bg-blue-600 px-3 py-1 rounded'>确定</button>
            </div>
          </div>
        </>}        
      </section>
    </div>
  )
}
