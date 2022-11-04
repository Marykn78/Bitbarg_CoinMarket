import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import  TextField  from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import { Divider, List, ListItem, ListItemButton } from '@mui/material';
import { useState,useContext } from 'react';
import { CoindataContext } from '../CoindataContext/CoindataContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border:'none',
    boxShadow: 24,
    p: 4,
    borderRadius:'16px',
    // maxHeight:'600px',
    // overflowY:'scroll'
  };

const CoinSelectItem = ({open,setOpen,form,setForm}) => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [search, setSearch] = useState("");

    const {coindata}=useContext(CoindataContext)
    

    const searchHandler =(e)=>{
        setSearch(e.target.value)
    }
    // Math.ceil((coindata?.data?.coins[item]?.price)*34300)
    const inputHandler = (item) => {
        setForm({name:item.name,icon:item.iconUrl,price:Math.ceil((item.price)*34300)});
        setOpen(false)
    };
    return ( 
        
        <div>
        <TextField label={'انتخاب ارز'} value={form.name} defaultValue={'تتر (USDT)'} size="small" sx={{width:'240px'}} onClick={handleOpen}
        InputProps={{ readOnly:true ,startAdornment: <img width={'30px'} src={form.icon} alt='' />}}></TextField>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <Grid container sx={{width:'100%'}} flexDirection={'column'}>
                <Grid container item justifyContent={'space-between'}>
                    <Typography>انتخاب ارز</Typography>
                    <IconButton>
                        <CloseIcon onClick={handleClose}/>
                    </IconButton>
                </Grid>
                <Grid container item mt={2} justifyContent={'center'}>
                    <TextField fullWidth type="search"  size='small' placeholder='جستجو' 
                        onChange={searchHandler}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchOutlinedIcon />
                              </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
            <List p={2} sx={{maxHeight:'450px',overflowY:'scroll'}}>
                    {[0,1,2,3,4,5,6,7,8,9,10,11,12].filter(coin =>(
                        coindata?.data?.coins[coin]?.name.toUpperCase().includes(search.toUpperCase())
                    )).map(item=>(
                        <>
                            <ListItemButton onClick={()=>inputHandler(coindata?.data?.coins[item])} >
                                <ListItem sx={{textAlign:'right'}} >
                                    <Grid container justifyContent={'space-between'} alignItems={'center'}>
                                        <Grid  item display={'flex'}>
                                            <Grid >
                                                <img width={'30px'} src={`${coindata?.data?.coins[item]?.iconUrl}`} alt=''/>
                                            </Grid>
                                            <Grid >
                                                <Typography>{coindata?.data?.coins[item]?.name}</Typography>
                                                <Typography>{coindata?.data?.coins[item]?.symbol}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item alignItems={'center'} xs={6}>
                                        <Typography>{'قیمت خرید'}</Typography>
                                        <Typography variant=''>{Math.ceil((coindata?.data?.coins[item]?.price)*34300).toString().split('')}</Typography>
                                        <Typography variant='navtitle'>تومان</Typography>
                                    </Grid>
                                  </ListItem>
                                </ListItemButton>
                            <Divider variant='middle'/>
                        </>
                        
                    ))}
            </List>
          </Box>
        </Modal>
      </div>
     );
}
 
export default CoinSelectItem;


// .toString().match(/.{2,3}(?=..)|.+/g)
    // useEffect(()=>{
    //     axios.request(options).then((response)=> {
    //         console.log(response.data);
    //         setcoindata(response.data)
    //     }).catch((error)=>{
    //         console.error(error);
    //     });
    // },[])
    
    // const handleGetData = async () => {
    //     const data =await handlegetcoindata()
    //     setcoindata(data)
    // }

    // useEffect(() => {
    //     handleGetData()
    // }, [])
    // console.log(coindata)