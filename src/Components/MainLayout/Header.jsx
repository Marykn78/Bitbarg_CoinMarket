import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../../Assets/Svg/logo.svg";
import Button from "@mui/material/Button";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Stack from "@mui/material/Stack";
import {  useMediaQuery, useTheme } from "@mui/material";
import HeaderDesktop from "./HeaderDesktop";
// import  IconButton  from '@mui/material/IconButton';
// import Container from "@mui/material/Container";


const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white",boxShadow:'0',height:'auto' }}
    >
      {/* <Container> */}
          {isMobile ? (
            <>
            <Toolbar sx={{ justifyContent: "space-between",boxShadow:'1' ,padding:'0'}}>
              <Box sx={{ width: "20%" }}>
                <Logo />
              </Box>
              <Stack direction="row" spacing={2}>
                {/* <IconButton color="secondary" > */}
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
                  آیا نیاز به کمک دارید؟
                </Button>
                {/* </IconButton> */}
              </Stack>
            </Toolbar>
            </>
          ) : (
            <>
            <HeaderDesktop/>
            </>
          )}
      {/* </Container> */}
    </AppBar>
  );
};

export default Header;
