import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleButtonprice = ({formprice,setFormprice}) => {

//   const [alignment, setAlignment] = useState("toman");
//   const handleChange = (newAlignment) => {
//     setAlignment(newAlignment);
//   };

  return (
    <ToggleButtonGroup
      color="primary"
    //   value={alignment}
      exclusive
    //   onChange={handleChange}
    >
        <ToggleButton value={'tether'} onClick={()=>setFormprice(!formprice)}>تتر</ToggleButton>
        <ToggleButton value={'toman'} onClick={()=>setFormprice(!formprice)}>تومان</ToggleButton>

    // </ToggleButtonGroup>
  );
};

export default ToggleButtonprice;