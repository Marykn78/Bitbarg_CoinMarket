// import { Children } from 'react';
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/MainLayout/Main";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Home = React.lazy(() => import("../Pages/Home"));
const CurrentPrice = React.lazy(() => import("../Pages/CurrentPrice"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress color="secondary" />
              </Box>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/currentprice",
        element: (
          <Suspense
            fallback={
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress color="secondary"/>
              </Box>
            }
          >
            <CurrentPrice />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;