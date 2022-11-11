import { useMediaQuery, useTheme } from "@mui/material";
import CustomizedTableprice from "./CustomizedTableprice";
import TablePriceMobile from "./TablePriceMobile";
import { useCallback,useContext,useEffect } from "react";
import { CoindataContext } from "../../Context/CoindataContext";

const TablePrice = ({ formprice, mark ,filtered, setFiltered}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { coindata, setCoindata } = useContext(CoindataContext);

  const checkmarkHandler = useCallback(() => {
    if (mark) {
      setFiltered(coindata.filter((item) => item.favorit === true));
    } else {
      setFiltered(coindata);
    }
  }, [coindata, mark]);

  useEffect(() => {
    checkmarkHandler();
  }, [coindata, mark]);

  const starmarkHandler = useCallback(
    (name) => {
      setCoindata(
        coindata.map((item) =>
          item.name === name ? { ...item, favorit: !item.favorit } : item
        )
      );
    },
    [coindata]
  );
  return (
    <>
      {isMobile ? (
        <TablePriceMobile
        starmarkHandler={starmarkHandler}
          formprice={formprice}
          filtered={filtered}
        />
      ) : (
        <CustomizedTableprice
          starmarkHandler={starmarkHandler}
          formprice={formprice}
          filtered={filtered}
        />
      )}
    </>
  );
};

export default TablePrice;
