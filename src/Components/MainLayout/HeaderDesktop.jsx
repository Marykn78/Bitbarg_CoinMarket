import  Typography  from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import navbaritems from "../../Data/Dataproject";
import { ReactComponent as Logo } from "../../Assets/Svg/logo.svg";
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';

const HeaderDesktop = () => {
    return ( 
        <Grid container sx={{color:'black',width:'100%',height:'75px',justifyContent:'space-around',alignItems:'center'}}>
            <Grid item sx={{width:'40%',display:'flex',justifyContent:'space-evenly',paddingRight:'0'}}>
                <Button sx={{color:'black',padding:'0'}}>
                    <SegmentRoundedIcon sx={{ fontSize: 20 }} />
                    <Typography variant='navtitle' sx={{color:'black'}}>منو</Typography>
                </Button>
                {navbaritems.map((text,index)=>(
                    <Button>
                        <Typography variant='navtitle' key={index}>{text.item}</Typography>
                    </Button>
                ))}
            </Grid>
            <Grid item sx={{width:'20%',height:'50px',display:'flex',justifyContent:'space-around'}}>
                <Button variant="mainButton">ورود / ثبت نام</Button>
                <span layout="row">|</span>
                {/* <span layout="row"><hr flex/><hr flex/></span> */}
                <Logo />
            </Grid>
        </Grid>
     );
}
 
export default HeaderDesktop;

{/* <HomeIcon sx={{ fontSize: 40 }} /> */}
// fontSize="large"