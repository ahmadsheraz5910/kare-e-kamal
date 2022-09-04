import CircularProgress from '@mui/material/CircularProgress'
import React, { ReactNode } from 'react'
import { CheckIcon, SquareToStack } from '../icons'
export type copying_status = "copying" | "copied" | "not copied"
interface Props extends React.ComponentPropsWithoutRef<"button">{
    status?:copying_status,
    text_copying?:string
}

const CopyTooltip = ({status = "not copied", className = "",text_copying = "", ...props}: Props) => {
    const renderByStatus = (() => {
        switch(status) {
            case 'copied':
                return {
                    text:<p 
                        className='leFadeInLeft' 
                        style = {{
                            animationDuration:"0.5s"
                        }}>
                            {"Copied " + text_copying}
                        </p>, 
                    icon:<CheckIcon 
                            size = "small"
                            className = "stroke-[#58AAB0] elevateLeft" 
                            style = {{
                                animationDuration:"0.5s", 
                                animationDelay:"0.5s",
                            }} 
                        />        
                }
            case 'copying':
                return {
                    text:<p>{"Copying..."}</p>,
                    icon:<CircularProgress size = {12} sx  = {{color:"#58AAB0"}} />
                }
            default:
                return {
                    text:<p>{"Click to copy " + text_copying}</p>, 
                    icon:<SquareToStack size = "small" className = "stroke-[#58AAB0]" />
                }
        }
    })()
    
    return (
    <button className = {`max-h-min select-none text-xs text-slate-100 rounded-md p-1 pr-2 flex items-center space-x-1 ${className}`} {...props}>
        {renderByStatus.icon}
        {renderByStatus.text}
    </button>
  )
}

export default CopyTooltip