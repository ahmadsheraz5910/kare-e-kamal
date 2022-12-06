import { Tooltip } from '@mui/material'
import type { NextPage } from 'next'
import { Content } from '../core/content'
import CopyTooltip, { copying_status } from '../core/molecules/CopyTooltip';
import { useCallback, useEffect, useRef, useState } from 'react';
import copy from 'clipboard-copy'
const Home: NextPage = () => {
  const [copying_status, setCopyingStatus] = useState<copying_status[]>(Content.index.section.payment_options.map(() => 'not copied'))

  const copy_to_clipboard = useCallback(async (value:string, copying_index:number) => {
    setCopyingStatus(p => [...p.slice(0, copying_index),'copying', ...p.slice(copying_index + 1)])
    try {
      copy(value)
      setCopyingStatus(p => p.map((_,idx) => idx === copying_index ? 'copied': 'not copied'))
    }catch(e) {
      setCopyingStatus(p => [...p.slice(0, copying_index),'not copied', ...p.slice(copying_index + 1)])
    }
  },[])

  // useEffect(() => {
  //   copy_to_clipboard(Content.index.section.payment_options[0].copy_this, 0)
  // }, [copy_to_clipboard])


  return (
    <div className = "m-auto max-w-lg">
      <header className = "p-4 text-center">
        <h1 className ="text-4xl md:text-6xl font-semibold">{Content.index.title}</h1>
      </header>
      <section className = "p-4 my-4 space-y-10">
        {Content.index.section.payment_options.map((option, idx) => 
          <Tooltip 
            placement='top-end'
            componentsProps={{
              popper:{
                sx: {
                }
              },
              tooltip:{
                sx: {
                  backgroundColor:'#183643',
                  padding:"2px 4px",
                } 
              },
              arrow:{
                sx: {
                  color:'#183643'
                }
              }
            }}
            
            arrow
            open = {true}
            title = {<CopyTooltip className = "min-w-max" text_copying={option.copying_type} status = {copying_status[idx]} />} 
            key = {idx}
          >
            <div                 
              className = {`max-w-md my-4 p-4 border shadow-md rounded-md text-gray-700 space-y-4 cursor-pointer hover:bg-gray-100
                ${copying_status[idx] === 'copied' ? "border-[#58AAB0] bg-green-100 hover:bg-green-100":""}
                `}
              onClick = {() => copy_to_clipboard(option.copy_this, idx)}
            >
              <div className = "flex items-start justify-between">
                <div>
                  <p className=  "font-medium">{option.payment_type}</p>
                  <p className = "text-xs text-gray-500">
                    {option.sub_info.reduce((prev,curr) => prev + " | " + curr)}
                  </p>
                </div>
                
              </div>                
              <div className = "rounded-md flex items-center justify-between">
                <p style = {{wordWrap:"break-word"}} className=  "text-sm underline pr-2">{option.copy_this}</p>       
              </div> 
            </div>          
          </Tooltip>
        )}
      </section>
    </div>
  )
}

export default Home
