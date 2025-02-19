import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import FindJob from './components/FindJob/FindJob.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/findjob',
        element:<FindJob></FindJob> 
      },
      {
        path: '/login',
        element:<LoginPage></LoginPage> 
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);







    