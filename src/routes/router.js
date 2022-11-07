// import { Children } from 'react';
import React,{Suspense} from 'react';
import  {createBrowserRouter} from 'react-router-dom';
import Main from '../Components/MainLayout/Main';
// import CurrentPrice from '../Pages/CurrentPrice';
// import Home from '../Pages/Home';
const Home =React.lazy(()=>import('../Pages/Home'))
const CurrentPrice =React.lazy(()=>import('../Pages/CurrentPrice'))

const  router =createBrowserRouter([
    {
        path:'/',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Main />
            </Suspense>
          ),
        children:[
            {
                index:true,
                element:(
                    <Suspense fallback={<div>Loading...</div>}>
                      <Home />
                    </Suspense>
                ),
            },
            {
                path:'/currentprice',
                element:(
                    <Suspense fallback={<div>Loading...</div>}>
                      <CurrentPrice />
                    </Suspense>
                ),
            }
        ]
    }
])

export default router;

// const Table = React.lazy(() => import("Pages/Table/Table"));