import { useMediaQuery, useTheme } from "@mui/material";
import CustomizedTableprice from "./CustomizedTableprice";
import TablePriceMobile from "./TablePriceMobile";

const TablePrice = ({ formprice, mark ,filtered, setFiltered}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMobile ? (
        <TablePriceMobile
          mark={mark}
          formprice={formprice}
          filtered={filtered}
          setFiltered={setFiltered}
        />
      ) : (
        <CustomizedTableprice
          formprice={formprice}
          mark={mark}
          filtered={filtered}
          setFiltered={setFiltered}
        />
      )}
    </>
  );
};

export default TablePrice;
