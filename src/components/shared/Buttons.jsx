import { cn } from "@/lib/utils"


export const Buttons = ({ btnText, className }) => {
    return (
        <button className={cn('px-6 py-2 text-lg font-normal rounded-2xl text-white', className)}>
            {btnText}
        </button>
    )
}
 