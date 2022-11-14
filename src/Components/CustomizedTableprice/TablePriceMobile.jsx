import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Grid from "@mui/material/Grid";
import { StyledTableCell } from "../../StyledTable/StyledTable";
import { StyledTableRow } from "../../StyledTable/StyledTable";
import { useContext} from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { SearchcoinContext } from "../../Context/CoindataContext";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const TablePriceMobile = ({formprice, filtered,starmarkHandler }) => {
  const { search } = useContext(SearchcoinContext);

  return (
    //TableContainer
    <> 
      {/* <Table sx={{ minWidth: 400, overflow: "hidden" }} > */}
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
                  <StyledTableCell>
                    <IconButton onClick={() => starmarkHandler(row?.name)}>
                      {row?.favorit ? (
                        <StarRoundedIcon />
                      ) : (
                        <StarOutlineRoundedIcon />
                      )}
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Grid container>
                      <Grid container item>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "rgba(0,0,0,.6)" }}
                        >
                          {formprice
                            ? Math.ceil(row?.price * 34300)
                            : row?.price}
                        </Typography>
                      </Grid>
                      <Grid container item>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "rgba(0,0,0,.6)" }}
                        >
                          ارزش:{row?.marketCap}تومان
                        </Typography>
                      </Grid>
                    </Grid>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Grid
                      container
                      flexDirection={"row-reverse"}
                      justifyContent={"space-around"}
                      alignItems={"center"}
                      sx={{ height: "45px", width: "100px" }}
                    >
                      <Grid item>
                        <img width={"30px"} src={`${row?.iconUrl}`} alt="" />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" sx={{ color: "#000" }}>
                          {row?.name}
                        </Typography>
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
      {/* </Table> */}
    </>
  );
};

export default TablePriceMobile;
