import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import  Typography  from '@mui/material/Typography';
import { useEffect } from 'react';
import { useCallback } from 'react';

const Sortprice= ({filtered,setFiltered})=> {
  const [price, setPrice] = useState('');
  const handleChange = (event) => {
    setPrice(event.target.value);
  };
  const sortByPrice=useCallback(()=>{
    const coindataCopy =[...filtered]
    if(price==='max'){
      setFiltered(coindataCopy.sort((coina,coinb)=> coinb.price -coina.price))
    }else if(price==='min'){
      setFiltered(coindataCopy.sort((coina,coinb)=> coina.price -coinb.price))
    }
  },[price,filtered])

  useEffect(()=>{
    sortByPrice()
  },[price,filtered])
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
          <MenuItem value={'min'}>کمترین قیمت</MenuItem>
          <MenuItem value={'max'}>بیشترین قیمت</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default Sortprice;