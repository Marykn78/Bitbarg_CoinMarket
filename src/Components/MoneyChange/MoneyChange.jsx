import  Grid  from "@mui/material/Grid";
import bitbarg from '../../Assets/Images/bitbarg.webp'
import  TextField  from "@mui/material/TextField";
import  Button  from "@mui/material/Button";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
// import { MoneyChangetextfield } from "../../Data/Dataproject";
import  Typography  from "@mui/material/Typography";
import CoinModal from "../CoinModal/CoinModal";
import { useState } from "react";

const MoneyChange = () => {
    const [form,setForm] = useState('');

    return ( 
        <Grid container marginTop={10}  flexDirection={'column'} alignItems={'center'}>
            <Grid container item  justifyContent={'center'} xs={8} md={3}>
                <img width={'70%'} src={bitbarg} alt=''/>
            </Grid>
            <Grid container item justifyContent={'space-evenly'}  margin={2} xs={10} md={6}>
                {/* {MoneyChangetextfield.map((field,index) =>(
                    <Grid item  m={{xs:1,md:0}}>
                        <TextField value={form.price} label={field.label} defaultValue={field.value} size="small" sx={{width:'240px'}} key={index}></TextField>
                    </Grid>
                ))} */}
                <Grid item  m={{xs:1,md:0}}>
                    <TextField value={form.price} label={'تومان'} defaultValue={'33,400'} size="small" sx={{width:'240px'}} InputProps={{ readOnly:true}} ></TextField>
                </Grid>
                <Grid item  m={{xs:1,md:0}}>
                    <TextField  label={'واحد'} defaultValue={'1'} size="small" sx={{width:'240px'}}></TextField>
                </Grid>
                <CoinModal form={form} setForm={setForm}/>
            </Grid>
            <Grid container item justifyContent={'space-around'} xs={8} md={3}>
                <Grid width={'45%'}>
                    <Button variant="mainButton">درخواست خرید</Button>
                </Grid>
                <Grid width={'45%'}>
                    <Button variant="secondaryButton" >فروش</Button>
                </Grid>
            </Grid>
            <Grid container item flexDirection={'column'} justifyContent={'center'} alignItems={'center'} m={2} xs={4} md={2}>
                <Typography variant="navtitle" sx={{color:'#000',textAlign:'center'}}>پشتیبانی 24 ساعته <br/>حتی در روزهای تعطیل</Typography>
                <Button item sx={{textAlign:'center'}}>
                    <Typography ography p={1} variant="subtitle1">{"021-91079677"}</Typography>
                    <LocalPhoneOutlinedIcon sx={{ color:'#4285F2'}} fontSize="small"/>
                </Button>
            </Grid>
        </Grid>
     );
}
 
export default MoneyChange;