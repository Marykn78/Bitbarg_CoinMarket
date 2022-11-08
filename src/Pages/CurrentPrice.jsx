// import CustomizedTableprice from "../Components/CustomizedTableprice/CustomizedTableprice";
import SearchCoin from "../Components/SearchCoin/SearchCoin";
// import TableContainer from '@mui/material/TableContainer';
import Box from '@mui/material/Box';
import  Typography  from "@mui/material/Typography";
import BookmarkCoin from "../Components/BookmarkCoin/BookmarkCoin";
import Grid  from "@mui/material/Grid";
import Sortprice from "../Components/SortPrice/SortPrice";
import {useState} from 'react'
import ToggleButtonprice from "../Components/ToggleButton/ToggleButton";
import TablePrice from "../Components/CustomizedTableprice/TablePrice";

const CurrentPrice = () => {

    const [mark,setMark]=useState(false)
    // const [filtered, setFiltered] = useState([]);
    const [formprice,setFormprice]=useState(true);
    return ( 
        <Box width={'85%'} padding={{xs:4,md:10}} mr={{xs:4,md:15}} sx={{borderRadius:'10px',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'space-around'}}>
            <Box width={'100%'} display={'flex'} alignItems={'flex-start'} marginBottom={2}>
                <Typography sx={{variant:{xs:'h2',md:'h1'}}}>قیمت لحظه ای</Typography>
            </Box>
            <Box mb={2} width={'100%'} display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-between'}>
                <Grid container item  md={4} sx={{width:'100%'}} flexWrap={'wrap'}  justifyContent={'center'} alignItems={'center'}>
                    <SearchCoin />
                </Grid>
                <BookmarkCoin mark={mark} setMark={setMark}></BookmarkCoin>
                <Sortprice/>
                <ToggleButtonprice formprice={formprice} setFormprice={setFormprice} />
            </Box>
            <TablePrice mark={mark}  formprice={formprice}/>
        </Box>
     );
}
 
export default CurrentPrice;

// sx={{width:{xs:100,sm:200,md:300}}}