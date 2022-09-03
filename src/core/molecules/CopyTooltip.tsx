import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'
import { CheckIcon, ClipboardIcon } from '../icons'

type Props = {
    status?:"copying" | "copied" | "not copied"
}

const CopyTooltip = ({status = "not copied"}: Props) => {
    const renderByStatus = (() => {
        switch(status) {
            case 'copied':
                return {
                    text:"Copied to Clipboard", 
                    icon:<CheckIcon className = "stroke-[#58AAB0]" />        
                }
            case 'copying':
                return {
                    text:"Copying...",
                    icon:<CircularProgress size = {12} sx  = {{color:"#58AAB0"}} />
                }
            default:
                return {
                    text:"Click to Copy", 
                    icon:<ClipboardIcon className = "stroke-[#58AAB0]" />
                }
        }
    })()
    
    return (
    <div className = "py-2 px-1 flex items-center space-x-3">
        {renderByStatus.icon}
        <p className = "text-xs text-slate-200">{renderByStatus.text}</p>
    </div>
  )
}

export default CopyTooltip