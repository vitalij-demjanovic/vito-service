import {ComponentPropsWithoutRef} from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {}
export default function Input({...props}: InputProps) {
    return (
        <input type="text" className='bg-third py-2 px-3 rounded-[15px] text-[#9aa3ae] focus:outline-none' placeholder='Search...' {...props}/>
    );
}