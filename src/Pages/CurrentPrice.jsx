import SearchCoin from "../Components/SearchCoin/SearchCoin";
import  Typography  from "@mui/material/Typography";
import BookmarkCoin from "../Components/BookmarkCoin/BookmarkCoin";
import Grid  from "@mui/material/Grid";
import Sortprice from "../Components/SortPrice/SortPrice";
import {useState} from 'react'
import ToggleButtonprice from "../Components/ToggleButton/ToggleButton";
import TablePrice from "../Components/CustomizedTableprice/TablePrice";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import IconButton  from "@mui/material/IconButton";
import {Link} from 'react-router-dom'
const CurrentPrice = () => {

    const [mark,setMark]=useState(false)
    const [filtered, setFiltered] = useState([]);
    const [formprice,setFormprice]=useState(true);
    return ( 
        <Grid container width={'85%'} padding={{xs:4,md:10}} mr={{xs:4,md:15}} sx={{borderRadius:'10px',alignItems:'center',flexDirection:'column'}}>
            <Grid container item width={'100%'} display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'} marginBottom={2}>
                <Typography>قیمت لحظه ای</Typography>
                <Link to={'/'}>
                    <IconButton>
                        <ArrowBackIosRoundedIcon/>
                    </IconButton>
                </Link>
            </Grid>
            <Grid container item mb={2} width={'100%'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-between'}>
                <Grid container item  md={4} flexWrap={'wrap'}  mt={1}>
                    <SearchCoin />
                </Grid>
                <Grid item  mt={1}>
                <BookmarkCoin mark={mark} setMark={setMark} ></BookmarkCoin>

                </Grid>
                <Grid item  mt={1}>
                <Sortprice filtered={filtered} setFiltered={setFiltered} />

                </Grid>
                <Grid item  mt={1}>
                <ToggleButtonprice formprice={formprice} setFormprice={setFormprice} />

                </Grid>
            </Grid>
            <TablePrice mark={mark}  formprice={formprice} filtered={filtered} setFiltered={setFiltered}/>
        </Grid>
     );
}
 
export default CurrentPrice;