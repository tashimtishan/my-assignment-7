import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import "./index.css";
import Rootlayout from './layout/Rootlayout';
import HomePage from './Pages/Homepage/HomePage';
import FriendsDetailsPage from './Pages/Homepage/FriendsDetailsPage/FriendsDetailsPage';
import Timeline from './Pages/Homepage/Timeline/Timeline';
import FriendsAnalyticspage from './Pages/Homepage/FriendsAnalyticspage/FriendsAnalyticspage';


const rounter=createBrowserRouter([
  {
    path:"/",
    element:<Rootlayout></Rootlayout>,
    children:[
    {
      index: true,
      element:<HomePage></HomePage>
    },
    {
      path:"/FriendsDetailsPage",
      element:<FriendsDetailsPage></FriendsDetailsPage>
    },
    {
      path:"/Timeline",
      element:<Timeline></Timeline>
    },
    {
      path:"/FriendsAnalyticspage",
      element:<FriendsAnalyticspage></FriendsAnalyticspage>
    },
  ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={rounter}></RouterProvider>
  </StrictMode>,
)
