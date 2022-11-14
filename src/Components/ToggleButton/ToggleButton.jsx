import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleButtonprice = ({formprice,setFormprice}) => {
  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      sx={{border:1,height:'40px'}}
      // sx={{ "&.MuiToggleButton-root": { border: "1" } }}
    >
        <ToggleButton value={'tether'} sx={{ "&.MuiToggleButton-root": { border: "none" } }} onClick={()=>setFormprice(!formprice)}>تتر</ToggleButton>
        <ToggleButton value={'toman'} sx={{ "&.MuiToggleButton-root": { border: "none" } }} onClick={()=>setFormprice(!formprice)}>تومان</ToggleButton>

    // </ToggleButtonGroup>
  );
};

export default ToggleButtonprice;