import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import Grid from "@mui/material/Grid";
import { StyledTableCell } from "../../StyledTable/StyledTable";
import { StyledTableRow } from "../../StyledTable/StyledTable";
import TableRow from "@mui/material/TableRow";
import { useContext} from "react";
import { CoindataContext } from "../../Context/CoindataContext";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { SearchcoinContext } from "../../Context/CoindataContext";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const CustomizedTableprice = ({ formprice, filtered,starmarkHandler}) => {
  const { search } = useContext(SearchcoinContext);

  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead sx={{ display: { xs: "none", md: "contents" } }}>
          <TableRow>
            <StyledTableCell>نشان کردن</StyledTableCell>
            <StyledTableCell>تغییرات </StyledTableCell>
            <StyledTableCell align="center">ارزش بازار</StyledTableCell>
            <StyledTableCell align="center">قیمت خرید</StyledTableCell>
            <StyledTableCell align="center">ارز دیجیتال</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered.length === 0 ? (
            <Typography variant="navtitle">
              در حال حاضر موردی وجود ندارد
            </Typography>
          ) : (
            filtered
              .filter((coin) =>
                coin?.name.toUpperCase().includes(search.toUpperCase())
              )
              .map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th">
                    <IconButton onClick={() => starmarkHandler(row?.name)}>
                      {row?.favorit ? (
                        <StarRoundedIcon />
                      ) : (
                        <StarOutlineRoundedIcon />
                      )}
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell align="left">{row?.change}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.marketCap}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {formprice ? Math.ceil(row?.price * 34300) : row?.price}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Grid
                      container
                      flexDirection={"row-reverse"}
                      justifyContent={"space-around"}
                      alignItems={"center"}
                      sx={{ height: "50px", width: "auto" }}
                    >
                      <Grid item>
                        <img width={"40px"} src={`${row?.iconUrl}`} alt="" />
                      </Grid>
                      <Grid item>
                        <Typography>{row?.name}</Typography>
                        <Typography variant="navtitle">
                          {row?.symbol}
                        </Typography>
                      </Grid>
                    </Grid>
                  </StyledTableCell>
                </StyledTableRow>
              ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTableprice;
