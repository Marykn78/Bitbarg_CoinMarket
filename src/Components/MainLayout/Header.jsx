import AppBar from "@mui/material/AppBar";
import { useMediaQuery, useTheme } from "@mui/material";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "0", height: "auto" }}
    >
      {isMobile ? (
        <HeaderMobile />
      ) : (
        <>
          <HeaderDesktop />
        </>
      )}
    </AppBar>
  );
};

export default Header;
