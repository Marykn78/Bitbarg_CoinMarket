import { useState } from 'react';
import CoinSelectItem from './CoinSelectItem';

const CoinModal = ({form,setForm}) => {
    const [open, setOpen] = useState(false);

    //const {coindata}=useContext(CoindataContext)
    // const [coindata,setCoindata]=useContext(CoindataContext)

    return (
      <>
        <CoinSelectItem open={open} setOpen={setOpen}  form={form} setForm={setForm}/>
      </>
    );
}
 
export default CoinModal;

  