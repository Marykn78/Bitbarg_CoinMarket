import  Typography  from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import navbaritems from "../../Data/Dataproject";
import Divider from '@mui/material/Divider';
import { ReactComponent as Logo } from "../../Assets/Svg/logo.svg";
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';
import { Link } from 'react-router-dom';

const HeaderDesktop = () => {
    return ( 
        <Grid container sx={{color:'black',width:'100%',height:'75px',justifyContent:'space-around',alignItems:'center'}}>
            <Grid item sx={{width:'40%',display:'flex',justifyContent:'space-evenly',paddingRight:'0'}}>
                <Button sx={{color:'black',padding:'0'}}>
                    <SegmentRoundedIcon sx={{ fontSize: 20 }} />
                    <Typography variant='navtitle' sx={{color:'black'}}>منو</Typography>
                </Button>
                <Button>
                    <Link to={'/'}>
                        <Typography variant='navtitle'>خانه</Typography>
                    </Link>
                </Button>
                <Button>
                    <Link to={'/CurrentPrice'}>
                        <Typography variant='navtitle'>قیمت لحظه ای</Typography>
                    </Link>
                </Button>
                {navbaritems.map((text,index)=>(
                        <Button>
                        <Typography variant='navtitle' key={index}>{text.item}</Typography>
                        </Button>
                ))}
            </Grid>
            <Grid item sx={{width:'20%',height:'50px',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                <Button sx={{width:'65%'}} variant="mainButton">ورود / ثبت نام</Button>
                <Divider orientation="vertical" variant="middle" flexItem sx={{mx:1}} />
                <Logo />
            </Grid>
        </Grid>
     );
}
 
export default HeaderDesktop;

{/* <HomeIcon sx={{ fontSize: 40 }} /> */}
// fontSize="large"