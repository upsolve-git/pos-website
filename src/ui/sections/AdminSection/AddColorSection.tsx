import React from "react";

import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";
import TextInput from "../../atoms/formElements/textInput/textInput";
import NumberInput from "../../atoms/formElements/NumberInput/NumberInput";
import FileInput from "../../atoms/formElements/FileInput/FileInput";
import { Category } from "../../../interfaces/Category";
import Dropdown from "../../atoms/formElements/Dropdown/Dropdown";

interface AddColorSectionProps{
    color : string,
    shade : string,
    code : string,
    setColor : (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setShade : (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setCode : (e: React.ChangeEvent<HTMLInputElement>)=>void,
    addColor : () => void
}

const AddColorSection: React.FC<AddColorSectionProps> = ({color, shade, code,setColor,setShade,setCode, addColor})=>{
    return(
        <div
        className="flex flex-col items-center">
            <table
            className="table-auto text-md border-separate border-spacing-4">
                <tbody>
                    <TextInput value={color} label="Color" onChange={setColor}/>
                    <TextInput value={shade} label="Shade"  onChange={setShade}/>
                    <TextInput value={code} label="HEX Code"  onChange={setCode}/>
                </tbody>
            </table>
            <div
            className="w-[60%]">
                <ActionButton 
                label="Add Color"
                callbackFunc={addColor}/>
            </div>
        </div>
    )
}

export default AddColorSection
