import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Grid from "@mui/material/Grid";
import { StyledTableCell } from "../StyledTable/StyledTable";
import { StyledTableRow } from "../StyledTable/StyledTable";
import { useContext, useEffect } from "react";
import { CoindataContext } from "../../Context/CoindataContext";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { SearchcoinContext } from "../../Context/CoindataContext";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const TablePriceMobile = ({ mark, formprice, filtered, setFiltered }) => {
  const { coindata, setCoindata } = useContext(CoindataContext);
  const { search } = useContext(SearchcoinContext);
  // const [filtered, setFiltered] = useState([]);

  const checkmarkHandler = () => {
    if (mark) {
      setFiltered(coindata.filter((item) => item.favorit === true));
    } else {
      setFiltered(coindata);
    }
  };
  useEffect(() => {
    checkmarkHandler();
  }, [coindata, mark]);

  const checkstarmarkHandler = (name) => {
    setCoindata(
      coindata.map((item) =>
        item.name === name ? { ...item, favorit: !item.favorit } : item
      )
    );
  };
  return (
    <TableContainer>
      <Table sx={{ minWidth: 400, overflow: "hidden" }}>
        <TableBody>
          {filtered.length === 0 ? (
            <Typography>nothing</Typography>
          ) : (
            filtered
              .filter((coin) =>
                coin?.name.toUpperCase().includes(search.toUpperCase())
              )
              .map((row) => (
                <StyledTableRow>
                  <StyledTableCell>
                    <IconButton onClick={() => checkstarmarkHandler(row?.name)}>
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
                        {/* خرید:{row?.marketCap} */}
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
      </Table>
    </TableContainer>
  );
};

export default TablePriceMobile;
