import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import Grid  from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import { StyledTableCell } from '../StyledTable/StyledTable';
import { StyledTableRow } from '../StyledTable/StyledTable';
import TableRow from '@mui/material/TableRow';
import { useContext, useEffect } from 'react';
import { CoindataContext } from '../../Context/CoindataContext';
import { IconButton, Typography } from '@mui/material';
import { SearchcoinContext } from "../../Context/CoindataContext";
// import { useState } from 'react';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
// import { useState } from 'react';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }
  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  // ];
  
 const  CustomizedTableprice=({filtered,mark,setFiltered,formprice,setFormprice})=> {
  const{coindata,setCoindata}=useContext(CoindataContext)
  const {search}=useContext(SearchcoinContext)



  const checkmarkHandler =()=>{
    if(mark){
      setFiltered(coindata.filter(item=>(item.favorit === true)))
    }else{
      setFiltered(coindata)
    }
  }
  useEffect(()=>{
    checkmarkHandler()
  },[coindata,mark])

  const checkstarmarkHandler = (name) => {
    setCoindata(
      coindata.map((item) =>
        item.name === name ? { ...item, favorit: !item.favorit } : item
      )
    );
  };
    return (
      // component={Paper} 
      <TableContainer >
        <Table sx={{ minWidth: 500}} aria-label="customized table">
          <TableHead sx={{display:{xs:'none',md:'contents'}}}>
            <TableRow>
              <StyledTableCell>نشان کردن</StyledTableCell>
              <StyledTableCell>تغیرات </StyledTableCell>
              <StyledTableCell align="center">ارزش بازار</StyledTableCell>
              <StyledTableCell align="center">قیمت خرید</StyledTableCell>
              <StyledTableCell align="center" sx={{width:'150px'}}>ارز دیجیتال</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.length === 0 ?<Typography>nothing</Typography>:filtered.filter(coin=>(coin?.name.toUpperCase().includes(search.toUpperCase()))).map((row) => (
              <StyledTableRow>
                <StyledTableCell component="th">
                  <IconButton onClick={() => checkstarmarkHandler(row?.name)}>
                    {row?.favorit ? <StarRoundedIcon/>:<StarOutlineRoundedIcon/>} 
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center" sx={{display:{xs:'none',md:'flex'}}}>{row?.change}</StyledTableCell>
                <StyledTableCell align="center">{row?.marketCap}</StyledTableCell>
                <StyledTableCell align="center">{formprice ?  Math.ceil((row?.price)*34300) : (row?.price)}</StyledTableCell>
                {/* <StyledTableCell align="center">{formprice ? <Typography>Math.ceil((row?.price)*34300) InputProps={{}}</Typography>: (row?.price)}</StyledTableCell> */}

                <StyledTableCell align="center">
                  <Grid container flexDirection={'row-reverse'} justifyContent={'space-around'} alignItems={'center'}  sx={{height:'50px',width:'auto'}}>
                    <Grid item>
                      <img width={'40px'} src={`${row?.iconUrl}`} alt=''/>
                    </Grid>
                    <Grid item>
                      <Typography>
                        {row?.name}
                      </Typography>
                      <Typography variant='navtitle'>
                        {row?.symbol}
                      </Typography>
                    </Grid>
                  </Grid>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export default CustomizedTableprice;

