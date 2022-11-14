import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../../Assets/Svg/logo.svg";
import Button from "@mui/material/Button";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const HeaderMobile = () => {
  return (
    <>
      <Toolbar sx={{ justifyContent: "space-between", boxShadow: "1" }}>
        <Box sx={{ width: "90px" }}>
          <Logo />
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<HeadsetMicOutlinedIcon />}
            sx={{
              borderRadius: "25px",
              padding: "3px",
              backgroundColor: "rgba(0,0,0,.08)",
              color: "black",
            }}
          >
            <Typography
              sx={{ marginRight: "5px", color: "#000" }}
              variant={"navtitle"}
            >
              آیا نیاز به کمک دارید؟
            </Typography>
          </Button>
        </Stack>
      </Toolbar>
    </>
  );
};

export default HeaderMobile;
