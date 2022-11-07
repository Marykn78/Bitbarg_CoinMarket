import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import  Typography  from '@mui/material/Typography';

const Sortprice= ()=> {
  const [price, setPrice] = useState('');

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={price}
          size={'small'}
          onChange={handleChange}
          displayEmpty
          defaultValue={'ترتیب براساس'}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <Typography variant='h2'>ترتیب بر اساس</Typography>
          </MenuItem>
          <MenuItem value={10}>کمترین قیمت</MenuItem>
          <MenuItem value={20}>بیشترین قیمت</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default Sortprice;