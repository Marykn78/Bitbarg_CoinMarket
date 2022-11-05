import {RouterProvider} from 'react-router-dom'
import router from './routes/router';
import Coindata from './Context/CoindataContext';

function App() {
  return (
    <Coindata>
      <RouterProvider router={router}/>
    </Coindata>
  );
}

export default App;
