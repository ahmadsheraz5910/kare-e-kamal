type Size = "small" | "medium" | "large"
interface Props extends React.ComponentPropsWithoutRef<"svg"> {
    size?:Size,
    className?:string
}
const getClassBySize = (size:Size) => {
    switch(size) {
        case 'small':
            return "w-4 h-4"
        case 'large':
            return "w-7 h-7"
        default:
            return 'w-5 h-5'
    }
}
export const SquareToStack = ({size = "medium", className = "", ...props}:Props) => 
    <svg className={`${getClassBySize(size)} ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
    </svg>



export const CheckIcon = ({size = "medium", className = "", ...props}:Props) =>
    <svg className={`${getClassBySize(size)} ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>

