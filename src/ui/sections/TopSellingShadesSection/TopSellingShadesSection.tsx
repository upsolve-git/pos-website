import React from "react";

import NailPolish from "../../atoms/items/NailPolish/NailPolish";
import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";
import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";

import { assetPaths } from "../../../constants/assetPaths";

interface TopSellingShadesSectionProps{}

const TopSellingShadesSection: React.FC<TopSellingShadesSectionProps> = ()=>{

    let {isMobile} = useMediaWidth()
    let maxGridItems: number = isMobile? 1:4

    let nailPolishes: React.ReactNode[] = []
    let names = ["Golden Rose", "Luminous Nude", "Soft Pink", "Classic Beige"]
    let description = ["Warm, luxurious elegance", "Timeless, subtle sophistication", "Romantic, delicate blush", "Versatile, everyday neutral"]
    for(let i=0;i<maxGridItems; i++){
        let element = assetPaths.getElementAt(i)
        if(element){
            nailPolishes.push(<NailPolish name={names[i]} description={description[i]} nailPolishPath={element.value.nailPolishPath} key={i}/>)
        }
    }

    const topSellingShadesRedirect = ()=>{
        console.log('top sell shades');
    }

    return(
        <div
        className="bg-secondarylight flex flex-col items-center justify-evenly w-full">
            <h1
            className="text-black p-14 font-semibold text-md mt-3 tablet:text-xl desktop:text-2xl desktop:mt-6 monitor:text-5xl">
                TOP SELLING SHADES
            </h1>
            <div
            className={`w-fit grid grid-rows-1 grid-cols-${maxGridItems.toString()} h-fit tablet:gap-[100px]`}>
                {
                    nailPolishes.map(e=>e)
                }
            </div>
            <div
            className="my-20 tablet:w-[40%]">
                <ActionButton
                label="MIX AND MATCH YOUR SHADES NOW!"
                callbackFunc={topSellingShadesRedirect}/>
            </div>
        </div>
    )
}

export default TopSellingShadesSection