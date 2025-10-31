import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './component/Layout.jsx'
import JobDetails from './component/JobDetails.jsx'
import PostJob from './component/PostJob.jsx'
import JobList from './component/JobList.jsx'
import Profle from './component/Profle.jsx'
import EditProfile from './component/EditProfile.jsx'
import JobApply from './component/JobApply.jsx'
import AppliedJob from './component/AppliedJob.jsx'
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
