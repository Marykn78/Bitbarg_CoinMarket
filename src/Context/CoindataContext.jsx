import { useState,useEffect } from "react";
import { createContext } from "react";
import { handlegetmodaldata } from "../Api/Api";

export const CoindataContext =createContext({
    coindata:'',
    setCoindata:()=>{},
})

const Coindata =({children})=>{
    const [coindata,setCoindata]=useState('')
    const handleGetData = async () => {
        const data =await handlegetmodaldata()
        setCoindata(data)
    }
    useEffect(() => {
        handleGetData()
    }, [])
    return(
        <CoindataContext.Provider value={{coindata,setCoindata}}>
            {children}
        </CoindataContext.Provider>
    )
}

export default Coindata;