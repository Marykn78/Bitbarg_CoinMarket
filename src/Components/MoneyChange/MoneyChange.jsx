import Grid from "@mui/material/Grid";
import bitbarg from "../../Assets/Images/bitbarg.webp";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Typography from "@mui/material/Typography";
import CoinModal from "../CoinModal/CoinModal";
import Avatar from '@mui/material/Avatar';
import { useState, useCallback } from "react";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Tooltip from '@mui/material/Tooltip';
import {Link} from 'react-router-dom'

const MoneyChange = () => {
  const [form, setForm] = useState("");
  const [unit, setUnit] = useState(1);
  const unitinputHandler = useCallback((e) => {
    setUnit(e.target.value);
  }, []);
  return (
    <Grid
      container
      marginTop={10}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Grid container item justifyContent={"center"} xs={8} md={3}>
        <img width={"70%"} src={bitbarg} alt="" />
      </Grid>
      <Grid
        container
        item
        justifyContent={"space-evenly"}
        margin={2}
        xs={10}
        md={6}
      >
        <Grid item m={{ xs: 1, md: 0 }}>
          <TextField
            value={form.price * unit}
            label={"تومان"}
            defaultValue={"33400"}
            size="small"
            sx={{ width: "240px" }}
            InputProps={{ readOnly: true }}
          ></TextField>
        </Grid>
        <Grid item m={{ xs: 1, md: 0 }}>
          <TextField
            onChange={unitinputHandler}
            label={"واحد"}
            defaultValue={1}
            size="small"
            sx={{ width: "240px" }}
          ></TextField>
        </Grid>

        <CoinModal form={form} setForm={setForm} />
      </Grid>
      <Grid container item justifyContent={"space-around"} xs={8} md={3}>
        <Grid width={"45%"}>
          <Button variant="mainButton">درخواست خرید</Button>
        </Grid>
        <Grid width={"45%"}>
          <Button variant="secondaryButton">فروش</Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        m={2}
        xs={4}
        md={2}
      >
        <Typography
          variant="navtitle"
          sx={{ color: "#000", textAlign: "center" }}
        >
          پشتیبانی 24 ساعته <br />
          حتی در روزهای تعطیل
        </Typography>
        <Button item sx={{ textAlign: "center" }}>
          <Typography ography p={1} variant="subtitle1">
            {"021-91079677"}
          </Typography>
          <LocalPhoneOutlinedIcon sx={{ color: "#4285F2" }} fontSize="small" />
        </Button>
      </Grid>
      <Grid container justifyContent={'flex-end'} >
      <Tooltip title="قیمت لحظه ای">
        <Link to={"/CurrentPrice"}>
      <Avatar sx={{ bgcolor:'primary.main',width:'50px',height:'50px',ml:2,display: { xs: "flex", md: "none" } }}>
        <AttachMoneyIcon />
      </Avatar>
      </Link>
      </Tooltip>
      </Grid>

    </Grid>
  );
};

export default MoneyChange;
