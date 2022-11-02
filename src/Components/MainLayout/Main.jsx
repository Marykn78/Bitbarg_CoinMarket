import Header from "./Header";
import Box from '@mui/material/Box'
import MoneyChange from '../MoneyChange/MoneyChange'
import {Outlet} from 'react-router-dom'
import { useEffect } from 'react';
import { handlegetmodaldata } from '../../Api/Api';
import { useState } from 'react';

const Main = () => {
    const [modaldata,setModaldata]=useState()
    const handleGetData = async () => {
        const data =await handlegetmodaldata()
        setModaldata(data)
    }
    useEffect(() => {
        handleGetData()
    }, [])
    return ( 
        <Box>
            <Header/>
            <Box>
                <MoneyChange modaldata={modaldata}/>
                
                <Outlet/>
            </Box>
        </Box>
     );
}
 
export default Main;