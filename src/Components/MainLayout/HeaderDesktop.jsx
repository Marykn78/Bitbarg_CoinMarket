import  Typography  from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import navbaritems from "../../Data/Dataproject";
import { ReactComponent as Logo } from "../../Assets/Svg/logo.svg";
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';

const HeaderDesktop = () => {
    return ( 
        <Grid container sx={{color:'black',width:'100%',height:'75px',justifyContent:'space-around',alignItems:'center'}}>
            <Grid item sx={{width:'45%',display:'flex',justifyContent:'space-evenly',paddingRight:'0'}}>
                <Button sx={{color:'black',padding:'0'}}>
                    <SegmentRoundedIcon fontSize="large"/>
                    <Typography variant='h6'>منو</Typography>
                </Button>
                {navbaritems.map((text,index)=>(
                    <Typography variant='h6' key={index}>{text.item}</Typography>
                ))}
            </Grid>
            <Grid item sx={{width:'20%',height:'50px',display:'flex',justifyContent:'space-around'}}>
                <Button variant="contained" sx={{fontSize:'18px'}}>ورود / ثبت نام</Button>
                <span>|</span>
                <Logo/>
            </Grid>
        </Grid>
     );
}
 
export default HeaderDesktop;

{/* <HomeIcon sx={{ fontSize: 40 }} /> */}
