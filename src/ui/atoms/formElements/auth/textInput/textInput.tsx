import React from "react";

interface TextInputProps{
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    value,
    onChange
})=>{
    return(
        <div
        className="w-full h-fit my-2">
            <label htmlFor="signup-tel"
            className="text-darkgray block text-xxs tablet:text-xs desktop:text-sm">
                {label}
            </label>
            <input name="signup-tel" type="tel" value={value} onChange={onChange}
            className="border border-darkgray rounded-lg w-full text-xxs px-[0.3rem] py-[0.1rem] tablet:text-xs tablet:px-[0.5rem] tablet:py-[0.3rem] desktop:text-sm"/>
        </div>
    )
}

export default TextInput