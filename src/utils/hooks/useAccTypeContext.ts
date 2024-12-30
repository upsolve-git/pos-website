import { createContext, useContext } from "react";

interface AccTypeProps{
    accType: string,
    handleAccTypeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const AccTypeContext = createContext<AccTypeProps|undefined>(undefined)

export const useAccTypeContext: ()=>AccTypeProps = ()=>{
    let accTypeProps = useContext(AccTypeContext)

    if(accTypeProps === undefined){
        throw new Error('Context value undefined')
    }

    return accTypeProps
}