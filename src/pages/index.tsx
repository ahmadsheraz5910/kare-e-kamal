import { Tooltip } from '@mui/material'
import type { NextPage } from 'next'
import { Content } from '../core/content'
import CopyTooltip from '../core/molecules/CopyTooltip';
import { useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';

const Home: NextPage = () => {

  const [details_copied, setDetailsCopied] = useState(false)
  useEffect(() => {
    // Copy with options
    copy('Text', {
      debug: true,
      message: 'Press #{key} to copy',
    });
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
                  sx: {
                    backgroundColor:'#183643'
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
                <CopyTooltip status='copying' />
              } 
              arrow
              key = {idx}
            >
              <div className = "max-w-md my-4 p-4 border rounded-md shadow-md bg-slate-50 text-gray-700 cursor-pointer hover:bg-slate-100">
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
