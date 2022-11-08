import { useState } from 'react';
import CoinSelectItem from './CoinSelectItem';

const CoinModal = ({form,setForm}) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <CoinSelectItem open={open} setOpen={setOpen}  form={form} setForm={setForm}/>
      </>
    );
}
 
export default CoinModal;

  