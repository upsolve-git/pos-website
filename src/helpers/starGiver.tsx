import React from "react";

import Star from "../ui/atoms/items/ratings/Star/Star";

export const starGiver: (rateValue:number)=>React.ReactNode[] = (rateValue)=>{
    let c = 0
    let dumVal = rateValue
    let starNodes: React.ReactNode[] = []
    if(dumVal>0.5){
        if(Math.floor(dumVal)===dumVal){
            for(let i=0;i<dumVal;i++){
                c += 1
                starNodes.push(<Star
                    key={c}
                    fillType="full"/>)
            }
        }else{
            for(let i=0;i<dumVal-0.5;i++){
                c += 1
                starNodes.push(<Star
                    key={c}
                    fillType="full"/>)
            }
            c += 1
            starNodes.push(<Star
                key={c}
                fillType="half"/>)
        }
    }else{
        c+=1
        starNodes.push(<Star
            key={c}
            fillType="half"/>)
    }
    dumVal += 0.5
    if(dumVal<5){
        for(let i=0;i<5-dumVal;i++){
            c += 1
            starNodes.push(<Star
                key={c}
                fillType="empty"/>)
        }
    }
    return starNodes
}