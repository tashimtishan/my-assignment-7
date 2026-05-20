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
import { TimelineProvider } from './Components/shared/Timelinecontext';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notfound from './Pages/Homepage/Notfound';
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
      path:"/friends/:id",
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
    {
  path: "*",
  element: <Notfound/>
   }
  ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TimelineProvider>
    <ToastContainer />
      <RouterProvider router={rounter}></RouterProvider>
    </TimelineProvider>
  </StrictMode>,
)
