import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext } from 'react';
import  TextField  from '@mui/material/TextField';
import { SearchcoinContext } from '../../Context/CoindataContext';

const SearchCoin = () => {
    const {setSearch} =useContext(SearchcoinContext)
    const searchHandler =(e)=>{
        setSearch(e.target.value)
    }
  return (
    
      <TextField
        fullWidth
        type="search"
        size="small"
        placeholder="جستجو"
        onChange={searchHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
  );
};

export default SearchCoin;
