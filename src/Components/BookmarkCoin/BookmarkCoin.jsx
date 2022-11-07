// import InputAdornment from "@mui/material/InputAdornment";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
// import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';



const BookmarkCoin = ({mark,setMark}) => {
  return (
    <>
      <Grid container sx={{ m: 1, minWidth: 120 }} md={2}>
        <Stack direction="row" spacing={2}>
          <Button onClick={()=>setMark(!mark)}  sx={{width:'auto',height:'40px',padding:2}} variant="outlined" startIcon={<StarOutlineRoundedIcon />}>
            <Typography pr={'7px'} variant={'h2'}>نشان شده ها</Typography>
          </Button>
        </Stack>
      </Grid>
    </>
  );
};

export default BookmarkCoin;


        {/* <TextField
          fullWidth
          type="search"
          size="small"
          placeholder="نشان شده ها"
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <StarOutlineRoundedIcon />
              </InputAdornment>
            ),
          }}
        /> */}