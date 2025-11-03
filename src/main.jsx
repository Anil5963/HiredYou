import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './component/Layout.jsx'
import JobDetails from './pages/JobDetails.jsx'
import PostJob from './pages/PostJob.jsx'
import JobList from './pages/JobList.jsx'
import Profle from './pages/Profle.jsx'
import EditProfile from './pages/EditProfile.jsx'
import JobApply from './pages/JobApply.jsx'
import AppliedJob from './pages/AppliedJob.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element= {<JobList />}/>
      <Route path='jobdetails/:id' element= {<JobDetails/>} />
      <Route path='postjob' element= {<PostJob />} />
      <Route path='profile' element= {<Profle />} />
      <Route path='editprofile' element= {<EditProfile/>}/>
      <Route path='jobapply' element={<JobApply />}/>
      <Route path='appliedjob' element={<AppliedJob />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <RouterProvider router={router} />
  </Provider>,
)
