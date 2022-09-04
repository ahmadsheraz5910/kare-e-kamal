import CircularProgress from '@mui/material/CircularProgress'
import React, { ReactNode } from 'react'
import { CheckIcon, SquareToStack } from '../icons'
export type copying_status = "copying" | "copied" | "not copied"
type Props = {
    status?:copying_status
}

const CopyTooltip = ({status = "not copied"}: Props) => {

    

    const renderByStatus = (() => {
        switch(status) {
            case 'copied':
                return {
                    text:<p 
                        className='leFadeInLeft' 
                        style = {{
                            animationDuration:"0.5s"
                        }}>
                            {"Copied to Clipboard"}
                        </p>, 
                    icon:<CheckIcon className = "stroke-[#58AAB0] elevateLeft" style = {{
                        animationDuration:"0.5s", 
                        animationDelay:"0.5s",
                    }} />        
                }
            case 'copying':
                return {
                    text:<p>{"Copying..."}</p>,
                    icon:<CircularProgress size = {12} sx  = {{color:"#58AAB0"}} />
                }
            default:
                return {
                    text:<p>{"Click to Copy"}</p>, 
                    icon:<SquareToStack  className = "stroke-[#58AAB0]" />
                }
        }
    })()
    
    return (
    <div className = {`py-2 px-1 flex items-center space-x-2 text-sm font-medium text-green-50`}>
        {renderByStatus.icon}
        {renderByStatus.text}
    </div>
  )
}

export default CopyTooltip