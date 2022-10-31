import Header from "./Header";
import Box from '@mui/material/Box'
import MoneyChange from '../MoneyChange/MoneyChange'
import {Outlet} from 'react-router-dom'

const Main = () => {
    return ( 
        <Box>
            <Header/>
            <Box>
                <MoneyChange/>
                <Outlet/>
            </Box>
        </Box>
     );
}
 
export default Main;