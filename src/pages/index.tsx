import { Tooltip } from '@mui/material'
import type { NextPage } from 'next'
import { Content } from '../core/content'
import CopyTooltip, { copying_status } from '../core/molecules/CopyTooltip';
import { useEffect, useRef, useState } from 'react';
import copy from 'clipboard-copy'
const Home: NextPage = () => {
  const value_to_copy = useRef(Content.index.section.payment_options[0].copy_to_clipboard)
  const [copying_status, setCopyingStatus] = useState<copying_status>('not copied')

  const copy_to_clipboard = async (value:string) => {
    setCopyingStatus('copying')
    try {
      copy(value)
      setCopyingStatus('copied')
    }catch(e) {
      setCopyingStatus('not copied')
    }
  }

  useEffect(() => {
    copy_to_clipboard(value_to_copy.current)
  }, [])


  return (
    <div className = "m-auto max-w-lg">
      <header className = "p-4 text-center">
        <h1 className ="text-6xl font-semibold">{Content.index.title}</h1>
      </header>
      <section className = "p-4 my-4">
        <h4 className ="text-2xl font-semibold">{Content.index.section.title}</h4>
        {Content.index.section.payment_options.map((option, idx) => 
            <Tooltip 
              componentsProps={{
                tooltip:{
                  //className:"animate-bounce",
                  sx: {
                    backgroundColor:'#183643',
                    
                  } 
                },
                arrow:{
                  sx: {
                    color:'#183643'
                  }
                }
              }}

              placement='top-end' 
              open={true} 
              title={
                <CopyTooltip status={copying_status} />
              } 
              arrow
              key = {idx}
            >
              <div 
                className = "max-w-md my-4 p-4 border rounded-md shadow-md bg-slate-50 text-gray-700 cursor-pointer hover:bg-slate-100"
                onClick = {() => copy_to_clipboard(value_to_copy.current)}
              >
                <div style = {{gridTemplateColumns:"0.4fr 0.6fr"}} className = "grid grid-flow-col">
                  <p className=  "font-medium">{"Account Number"}</p>
                  <p>{option.account_number}</p>
                </div>
                <div style = {{gridTemplateColumns:"0.4fr 0.6fr"}} className = "grid grid-flow-col">
                  <p className=  "font-medium">{"Bank Name"}</p>
                  <p>{option.bank_name}</p>
                </div>
                <div style = {{gridTemplateColumns:"0.4fr 0.6fr"}} className = "grid grid-flow-col">
                  <p className=  "font-medium">{"Account Title"}</p>
                  <p>{option.account_title}</p>
                </div>
              </div>
            </Tooltip>
        )}
      </section>
    </div>
  )
}

export default Home
