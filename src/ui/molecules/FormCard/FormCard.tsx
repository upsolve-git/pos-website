import React from "react";

import Logo from "../../atoms/Logo/Logo";
import CrossButton from "../../atoms/buttons/CrossButton/CrossButton";

interface FormCardProps{
    children: React.ReactNode
}

const FormCard: React.FC<FormCardProps> = ({children}) => {
    return (
        <div
        className="bg-white rounded-2xl flex flex-col tablet:w-3/5 desktop:w-2/5">
            <CrossButton 
            />
            <div
            className="px-4 tablet:px-12 py-2">
                <div id="content-wrapper"
                className="flex flex-col items-center tablet:px-16 tablet:pb-11">
                    {/* <Logo
                    fill="#C26F2D"
                    styles="w-10 h-10 tablet:w-14 tablet:h-14 desktop:w-16 desktop:h-16 monitor:h-40 monitor:h-40"/>
                    <p
                    className="text-sm font-bold tablet:text-md desktop:text-xl text-primary">
                        Canadian Gel Nails
                    </p> */}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default FormCard