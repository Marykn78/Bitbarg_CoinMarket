import { useMediaQuery, useTheme } from "@mui/material";
import CustomizedTableprice from "./CustomizedTableprice";
import TablePriceMobile from "./TablePriceMobile";
import { useState } from "react";

const TablePrice = ({ formprice, mark }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [filtered, setFiltered] = useState([]);
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
