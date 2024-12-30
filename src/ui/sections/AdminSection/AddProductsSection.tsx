import React, { useState } from "react";

import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";
import TextInput from "../../atoms/formElements/textInput/textInput";
import NumberInput from "../../atoms/formElements/NumberInput/NumberInput";
import FileInput from "../../atoms/formElements/FileInput/FileInput";
import { Category } from "../../../interfaces/Category";
import Dropdown from "../../atoms/formElements/Dropdown/Dropdown";
import AddColorSection from "./AddColorSection";
import { Color } from "../../../interfaces/Color";

interface AddProductsSectionProps{
    prodName : string,
    prodType : string,
    prodDescription : string,
    prodCategory : Category,
    prodCost : number,
    prodDiscountPercentage : number, 
    error : string,
    categories : Category[]
    setProdName : (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setProdType : (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setProdDescription : (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setProdCategory : (selectedCategory: Category)=>void,
    setProdCost : (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setProdDiscountPercentage : (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setFile :  (e: React.ChangeEvent<HTMLInputElement>)=>void,
    addProduct : () => void
    colors : Color[],
    setColors : (color : Color) => void,
    prodCostBusiness : number,
    setProdCostBusiness : (e: React.ChangeEvent<HTMLInputElement>)=>void,
} 


const AddProducts: React.FC<AddProductsSectionProps> = ({prodName, prodType, prodDescription, prodCategory, prodCost, error, categories,setFile, colors, setColors,
    prodDiscountPercentage,setProdName,setProdType,setProdDescription, setProdCategory,setProdCost,setProdDiscountPercentage, addProduct, prodCostBusiness, setProdCostBusiness})=>{
    let [color, setColor] = useState("")
    let [shade, setShade] = useState("")
    let [code, setCode] = useState("")
    const handleAddColor = () => {setColors({color_name : color, shade_name : shade, code: code, color_id : 1})}
    const handleAddColorName = (e: React.ChangeEvent<HTMLInputElement>) => {setColor(e.target.value)}
    const handleAddShade = (e: React.ChangeEvent<HTMLInputElement>) => {setShade(e.target.value)}
    const handleAddCode = (e: React.ChangeEvent<HTMLInputElement>) => {setCode(e.target.value)}


    return(
        <div className={`${prodCategory.category_name === "Nail Polish" ? 'flex justify-evenly' : ''}`}>
            <div
        className="flex flex-col items-center">
            <table
            className="table-auto text-md border-separate border-spacing-4">
                <tbody>
                    <TextInput value={prodName} label="Product name" onChange={setProdName}/>
                    <FileInput label="Product images" onChange={setFile}/>
                    <TextInput value={prodType} label="Product type"  onChange={setProdType}/>
                    <TextInput value={prodDescription} label="Description"  onChange={setProdDescription}/>
                    <Dropdown value={prodCategory} label="Category" options={categories} onChange={setProdCategory}/>
                    <NumberInput value={prodCost} label="Product cost" callbackFunc={setProdCost}/>
                    <NumberInput value={prodDiscountPercentage} label="Price after discount" callbackFunc={setProdDiscountPercentage}/>
                    <NumberInput value={prodCostBusiness} label="Business Price after discount" callbackFunc={setProdCostBusiness}/>
                </tbody>
            </table>
            <div
            className="w-[60%]">
                <ActionButton 
                label="Add Product"
                callbackFunc={addProduct}/>
            </div>
            <p>
                {
                    error === 'false'&&
                    <span
                    className="text-green font-medium">
                        Added succesfully
                    </span>
                }
                {
                    error !== '' && error !== 'false' &&
                    <span
                    className="text-red font-medium">
                        {error}
                    </span>
                }
            </p>
        </div>
        { prodCategory.category_name ==="Nail Polish" && 
            <AddColorSection color={color} shade={shade} code={code} setCode={handleAddCode} setShade={handleAddShade} setColor={handleAddColorName} addColor={handleAddColor}/>
        }
        </div>
    )
}

export default AddProducts
