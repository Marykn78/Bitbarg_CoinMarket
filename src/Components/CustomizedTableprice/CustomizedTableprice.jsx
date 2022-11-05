import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Grid  from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { StyledTableCell } from '../StyledTable/StyledTable';
import { StyledTableRow } from '../StyledTable/StyledTable';
import TableRow from '@mui/material/TableRow';
import { useContext } from 'react';
import { CoindataContext } from '../../Context/CoindataContext';
import { Typography } from '@mui/material';


// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }
  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  // ];
  
 const  CustomizedTableprice=()=> {
  const{coindata}=useContext(CoindataContext)
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>نشان کردن</StyledTableCell>
              <StyledTableCell align="center">قیمت فروش</StyledTableCell>
              <StyledTableCell align="center">قیمت خرید</StyledTableCell>
              <StyledTableCell align="center">ارز دیجیتال</StyledTableCell>
              {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <Typography>star</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{coindata?.data?.coins[row]?.price}</StyledTableCell>
                <StyledTableCell align="center">
                  <Grid container flexDirection={'row-reverse'} justifyContent={'space-between'}  sx={{backgroundColor:'red'}}>
                    <Grid item>
                      <img width={'30px'} src={`${coindata?.data?.coins[row]?.iconUrl}`} alt=''/>
                    </Grid>
                    <Grid container item flexDirection={'column'} alignItems={'center'}>
                      <Grid item>
                        {coindata?.data?.coins[row]?.name}
                      </Grid>
                      <Grid item>
                        {coindata?.data?.coins[row]?.symbol}
                      </Grid>
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