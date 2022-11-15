import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext, useCallback } from "react";
import TextField from "@mui/material/TextField";
import { SearchcoinContext } from "../../Context/CoindataContext";
import TuneIcon from "@mui/icons-material/Tune";
import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const SearchCoin = ({ filtered, setFiltered }) => {
  const { setSearch } = useContext(SearchcoinContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [price, setPrice] = useState("");

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  const searchHandler = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const sortByPrice = useCallback(() => {
    const coindataCopy = [...filtered];
    if (price === "max") {
      setFiltered(
        coindataCopy.sort((coina, coinb) => coinb.price - coina.price)
      );
      setOpenDialog(false);
    } else if (price === "min") {
      setFiltered(
        coindataCopy.sort((coina, coinb) => coina.price - coinb.price)
      );
      setOpenDialog(false);
    }
  }, [price, filtered]);

  useEffect(() => {
    sortByPrice();
  }, [price]);

  return (
    <>
      <TextField
        fullWidth
        type="search"
        size="small"
        placeholder="جستجو"
        onChange={searchHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <IconButton
              sx={{ display: { xs: "contents", md: "none" } }}
              onClick={handleClickOpen}
            >
              <InputAdornment position="end">
                <TuneIcon />
              </InputAdornment>
            </IconButton>
          ),
        }}
      />
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle variant="h2">{"ترتیب بر اساس"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleChange} value={"min"} variant="h2">
            {" "}
            کمترین قیمت
          </Button>
          <Button onClick={handleChange} value={"max"} variant="h2">
            بیشترین قیمت
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default SearchCoin;
