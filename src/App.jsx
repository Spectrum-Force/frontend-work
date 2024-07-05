import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Eventpage from './pages/Eventpage'
import Organiserforms from './pages/Organiserforms'
import RootLayout from './Layouts/rootLayout'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<RootLayout/>,
      children: [
        {
          index:true,
          element: <Home/>,
        },
        {
          path: "events",
          element: <Eventpage/>,
          
        },
        {
          path: "add-event",
          element:<Organiserforms/>
        }
      ]
    }
  ]
   
  )
  return <RouterProvider router={router} />
}

export default App
