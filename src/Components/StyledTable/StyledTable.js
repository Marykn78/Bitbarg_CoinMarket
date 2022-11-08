import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  width:50,
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.black,
    width:500,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderRadius:'10px'
  },
}));

 export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



