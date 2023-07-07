import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MLogin from './components/Manufacturer/ManufacturerLogin'
import MSignUp from './components/Manufacturer/ManufacturerSignUp'
import MLandingPage from './components/Manufacturer/ManufacturerLandingPage'
import Home from './components/Home';
import TLogin from './components/Transporter/Login';
import TSignUp from './components/Transporter/SignUp'
import TLandingPage from './components/Transporter/LandingPage';
import RootLayout from './components/RootLayout' 


function App() {

  const router=createBrowserRouter(
    [
      {
        path:"/",
        element:<RootLayout/>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/Manufacturer",
            children:[
              {
                path:"Login",
                element:<MLogin/>
              },
              {
                path:"SignUp",
                element:<MSignUp/>
              },
              {
                path:"Home",
                element:<MLandingPage/>
              }
            ]
          },
          {
            path:"/Transporter",
            children:[
              {
                path:"Login",
                element:<TLogin/>
              },
              {
                path :"SignUp",
                element:<TSignUp/>
              },
              {
                path:"Home",
                element:<TLandingPage/>
              }
            ]
          },


          ]
      }
    ]
  )


  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
