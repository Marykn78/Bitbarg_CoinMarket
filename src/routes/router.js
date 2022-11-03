// import { Children } from 'react';
import  {createBrowserRouter} from 'react-router-dom';
import Main from '../Components/MainLayout/Main';
import CurrentPrice from '../Pages/CurrentPrice';
import Home from '../Pages/Home';
const  router =createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'/currentprice',
                element:<CurrentPrice/>
            }
        ]
    }
])

export default router;