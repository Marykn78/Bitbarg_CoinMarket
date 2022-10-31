import  Grid  from "@mui/material/Grid";
import bitbarg from '../../Assets/Images/bitbarg.webp'
import  TextField  from "@mui/material/TextField";
import  Button  from "@mui/material/Button";
// import StyledTextField from "../StyledTextField/StyledTextfield";

const MoneyChange = () => {

    return ( 
        <Grid container marginTop={10}  justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
            <Grid container item width={'25%'} justifyContent={'center'} >
                <img width={'70%'} src={bitbarg} alt=''/>
            </Grid>
            <Grid container item justifyContent={'space-evenly'} margin={2} width={'50%'}>
                <TextField label="تومان" defaultValue="33,400" size="small" sx={{width:'250px'}}></TextField>
                <TextField label="واحد" defaultValue="1" size="small" sx={{width:'250px'}}></TextField>    
                <TextField label="انتخاب ارز" defaultValue="تتر (USDT)" size="small" sx={{width:'250px'}}/>
                {/* <StyledTextField/> */}
            </Grid>
            <Grid container item justifyContent={'space-around'} width={'25%'}>
                <Grid width={'45%'}>
                    <Button variant="mainButton">درخواست خرید</Button>
                </Grid>
                <Grid width={'45%'}>
                    <Button variant="secondaryButton" >فروش</Button>
                </Grid>
            </Grid>
            <Grid></Grid>
        </Grid>
     );
}
 
export default MoneyChange;