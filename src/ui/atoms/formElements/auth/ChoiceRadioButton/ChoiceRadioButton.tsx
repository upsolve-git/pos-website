import React from "react";
import { useAccTypeContext } from "../../../../../utils/hooks/useAccTypeContext";

interface ChoiceRadioButtonProps{
    value: string,
    name: string,
}

const ChoiceRadioButton: React.FC<ChoiceRadioButtonProps> = ({value, name})=>{
    let {accType, handleAccTypeChange} = useAccTypeContext()
    return(
        <div
        className="w-fit flex justify-center items-center">
            <input 
                type="radio" 
                name={name} 
                value={value}
                onChange={handleAccTypeChange}
                checked={accType===value?true:false}
            className="mr-2"/>
            <label
            className="text-xxs tablet:text-xs desktop:text-sm">
                {value}
            </label>
        </div>
    )
}

export default ChoiceRadioButton