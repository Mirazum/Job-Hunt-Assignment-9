import React from 'react'
import ReactDOM from 'react-dom/client'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import ErrorPage from './Components/ErrorPage'
import Home from './Components/Home'
import JobDetail from './Components/JobDetail'
import Statistics from './Components/Statistics'
import AppliedJobs from './Components/AppliedJobs'
import Blog from './Components/Blog'
import Job from './Components/Job'

const router = createBrowserRouter([{
  path:'/',
  element:<App></App>,
  errorElement: <ErrorPage></ErrorPage>,
  children:[
    {
      path:'/',
      element:<Home></Home>,
      loader: ()=> fetch('/category.json')
    },
    {
      path:'/',
      element:<Job></Job>
    },
    {
      path:'/job/:id',
      element:<JobDetail></JobDetail>
    },
    
    {
      path:'/statistics',
      element:<Statistics></Statistics>
    },
    {
      path:'/jobs',
      element:<AppliedJobs></AppliedJobs>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    },
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
