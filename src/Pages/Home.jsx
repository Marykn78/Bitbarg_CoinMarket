import MoneyChange from "../Components/MoneyChange/MoneyChange";
import { useEffect } from 'react';
import { handlegetmodaldata } from '../Api/Api';
import { useState } from 'react';


const Home = () => {
    const [modaldata,setModaldata]=useState()
    const handleGetData = async () => {
        const data =await handlegetmodaldata()
        setModaldata(data)
    }
    useEffect(() => {
        handleGetData()
    }, [])
    return ( 
        <>
            <MoneyChange modaldata={modaldata}/>
        </>
     );
}
 
export default Home;