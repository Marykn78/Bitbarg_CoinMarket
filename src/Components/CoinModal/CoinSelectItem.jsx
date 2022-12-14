import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useContext } from "react";
import { CoindataContext } from "../../Context/CoindataContext";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { SearchcoinContext } from "../../Context/CoindataContext";
import { useCallback } from "react";
import { padding } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
};
const CoinSelectItem = ({ open, setOpen, form, setForm }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { search, setSearch } = useContext(SearchcoinContext);
  const { coindata } = useContext(CoindataContext);
  const inputHandler = useCallback(
    (item) => {
      setForm({
        name: item.name,
        icon: item.iconUrl,
        price: Math.ceil(item.price * 34300),
      });
      setOpen(false);
    },
    [form]
  );
  const searchHandler = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  return (
    <>
      <TextField
        label={"انتخاب ارز"}
        value={form?.name}
        defaultValue={"تتر (USDT)"}
        size="small"
        sx={{ width: "240px" }}
        onClick={handleOpen}
        InputProps={{
          readOnly: true,
          startAdornment: (
            <Grid pr={'10px'} pt={'3px'}><img textAlign={"center"} width={"30px"} src={form?.icon} alt="" /></Grid>
          ),
        }}
      ></TextField>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} width={{ xs: 300, md: 500 }}>
          <Grid container sx={{ width: "100%" }} flexDirection={"column"}>
            <Grid container item justifyContent={"space-between"}>
              <Typography>انتخاب ارز</Typography>
              <IconButton>
                <CloseIcon onClick={handleClose} />
              </IconButton>
            </Grid>
            <Grid container item mt={2} xs={12} justifyContent={"center"}>
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
                }}
              />
            </Grid>
          </Grid>
          <List p={2} sx={{ maxHeight: "450px", overflowY: "scroll" }}>
            {coindata
              .filter((coin) =>
                coin?.name.toUpperCase().includes(search.toUpperCase())
              )
              .map((item) => (
                <>
                  <ListItemButton onClick={() => inputHandler(item)}>
                    <ListItem sx={{ textAlign: "right" }}>
                      <Grid
                        container
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Grid item display={"flex"}>
                          <Grid>
                            <img
                              width={"30px"}
                              src={`${item?.iconUrl}`}
                              alt=""
                            />
                          </Grid>
                          <Grid>
                            <Typography>{item?.name}</Typography>
                            <Typography>{item?.symbol}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item alignItems={"center"} xs={6}>
                        <Typography>{"قیمت خرید"}</Typography>
                        <Typography variant="">
                          {Math.ceil(item?.price * 34300)
                            .toString()
                            .split("")}
                        </Typography>
                        <Typography variant="navtitle">تومان</Typography>
                      </Grid>
                    </ListItem>
                  </ListItemButton>
                  <Divider variant="middle" />
                </>
              ))}
          </List>
        </Box>
      </Modal>
    </>
  );
};

export default CoinSelectItem;
