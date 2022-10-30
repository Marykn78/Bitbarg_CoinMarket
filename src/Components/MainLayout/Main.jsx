import Header from "./Header";
import Box from '@mui/material/Box'
import {Outlet} from 'react-router-dom'

const Main = () => {
    return ( 
        <Box>
            <Header/>
            <Box>
                <Outlet/>
            </Box>
        </Box>
     );
}
 
export default Main;