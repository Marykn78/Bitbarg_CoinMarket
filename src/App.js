// import Main from "./Components/MainLayout/Main";
import {RouterProvider} from 'react-router-dom'
import router from './routes/router';
import Coindata from './Components/CoindataContext/CoindataContext';

function App() {
  return (
    <Coindata>
      <RouterProvider router={router}/>
    </Coindata>
  );
}

export default App;
