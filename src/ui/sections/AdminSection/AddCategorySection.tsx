import React from "react";

import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";
import TextInput from "../../atoms/formElements/textInput/textInput";

interface AddCategorySectionProps{
    category : string,
    setCategory : (e: React.ChangeEvent<HTMLInputElement>)=>void
    addCategory : () => void
    success : boolean,
    error : boolean
}

const AddCategory: React.FC<AddCategorySectionProps> = ({category, setCategory, addCategory, success, error})=>{
    return(
        <div
        className="flex flex-col items-center">
            <table
            className="table-auto text-md border-separate border-spacing-4">
                <tbody>
                    <TextInput value={category} label="Category name" onChange={setCategory}/>
                </tbody>
            </table>
            <div
            className="w-[60%]">
                <ActionButton 
                label="Add Product"
                callbackFunc={addCategory}/>
            </div>
            <p>
                {
                    success&&
                    <span
                    className="text-green font-medium">
                        Added succesfully
                    </span>
                }
                {
                    error &&
                    <span
                    className="text-red font-medium">
                        {error}
                    </span>
                }
            </p>
        </div>
    )
}

export default AddCategory
