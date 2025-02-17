import React from "react";

interface EmailInputProps{
    value: string,
    error: string,
    label?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}

const EmailInput: React.FC<EmailInputProps> = ({value, error, label, onChange}) => {
    return (
        <div
        className="w-full h-fit my-2">
            <label htmlFor="login-email"
            className="text-darkgray block text-xxs tablet:text-xs desktop:text-sm">
                {label?label:"Email address"}
            </label>
            <input name="login-email" type="email" value={value}
             onChange={onChange}
            className={`focus:outline-none ${error?'border-2 border-red':'border border-darkgray'} rounded-lg w-full text-xxs px-[0.3rem] py-[0.1rem] tablet:text-xs tablet:px-[0.5rem] tablet:py-[0.3rem] desktop:text-sm`}/>
            <p
            className="text-red block text-xxs tablet:text-xs desktop:text-sm">{error}</p>
        </div>
    )
}

export default EmailInput