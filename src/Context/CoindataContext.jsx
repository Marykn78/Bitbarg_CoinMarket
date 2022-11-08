import { useState,useEffect } from "react";
import { createContext } from "react";
import { handlegetmodaldata } from "../Api/Api";

export const CoindataContext =createContext({
    coindata:'',
    setCoindata:()=>{},
})
export const SearchcoinContext=createContext({
    search:'',
    setSearch:()=>{}
})

const Coindata =({children})=>{
    const [coindata,setCoindata]=useState([])
    const [search, setSearch] = useState('');
    const handleGetData = async() => {
        const data =await handlegetmodaldata()
        setCoindata(data.map(item=>({...item,favorit:false})))
    }
    useEffect(() => {
        handleGetData()
    }, [])
    return(
        <>
        <SearchcoinContext.Provider value={{search, setSearch}}>
            <CoindataContext.Provider value={{coindata,setCoindata}}>
                {children}
            </CoindataContext.Provider>
        </SearchcoinContext.Provider>
        </>

    )
}

export default Coindata;