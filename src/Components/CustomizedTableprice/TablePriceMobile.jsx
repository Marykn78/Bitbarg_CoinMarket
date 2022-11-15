import Grid from "@mui/material/Grid";
import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { SearchcoinContext } from "../../Context/CoindataContext";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const TablePriceMobile = ({ formprice, filtered, starmarkHandler }) => {
  const { search } = useContext(SearchcoinContext);
  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"100%"}
    >
      {filtered.length === 0 ? (
        <Typography variant="navtitle">در حال حاضر موردی وجود ندارد</Typography>
      ) : (
        filtered
          .filter((coin) =>
            coin?.name.toUpperCase().includes(search.toUpperCase())
          )
          .map((row, index) => (
            <Grid container key={index} xs={12} justifyContent={"space-around"}>
              <Grid item>
                <IconButton onClick={() => starmarkHandler(row?.name)}>
                  {row?.favorit ? (
                    <StarRoundedIcon />
                  ) : (
                    <StarOutlineRoundedIcon />
                  )}
                </IconButton>
              </Grid>
              <Grid align="center" item>
                <Grid container item>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "rgba(0,0,0,.6)" }}
                  >
                    {formprice ? Math.ceil(row?.price * 34300) : row?.price}
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
              <Grid align="center" item width={"35%"}>
                <Grid
                  container
                  flexDirection={"row-reverse"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  sx={{ height: "45px", width: "80px" }}
                >
                  <Grid item>
                    <img width={"25px"} src={`${row?.iconUrl}`} alt="" />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" sx={{ color: "#000" }}>
                      {row?.name}
                    </Typography>
                    <Typography variant="navtitle">{row?.symbol}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Divider variant="middle" />
            </Grid>
          ))
      )}
    </Grid>
  );
};

export default TablePriceMobile;
