import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleButtonprice = ({formprice,setFormprice}) => {
  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
    >
        <ToggleButton value={'tether'} onClick={()=>setFormprice(!formprice)}>تتر</ToggleButton>
        <ToggleButton value={'toman'} onClick={()=>setFormprice(!formprice)}>تومان</ToggleButton>

    // </ToggleButtonGroup>
  );
};

export default ToggleButtonprice;