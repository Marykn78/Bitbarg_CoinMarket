import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';

const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border:'none',
    boxShadow: 24,
    p: 4,
    borderRadius:'16px'
  };

const CoinModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <div>
        <TextField label={'انتخاب ارز'} defaultValue={'تتر (USDT)'} size="small" sx={{width:'240px'}} onClick={handleOpen}></TextField>
        <Modal
          open={open}
          onClose={handleClose}
        //   aria-labelledby="modal-modal-title"
        //   aria-describedby="modal-modal-description"
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
                    <TextField fullWidth type="search" size='small' placeholder='جستجو' 
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
            <Grid container justifyContent={'space-between'} marginTop={2} p={2}>
                <Typography>بیت کوین</Typography>
                <Typography>قیمت خرید</Typography>
            </Grid>
            
          </Box>
        </Modal>
      </div>
    );
}
 
export default CoinModal;

// export  function BasicModal() {
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
  
//     return (
//       <div>
//         <Button onClick={handleOpen}>Open modal</Button>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//               Text in a modal
//             </Typography>
//             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//             </Typography>
//           </Box>
//         </Modal>
//       </div>
//     );
//   }
  