import { Children, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages'
import Contact from './pages/hop-tac'
 import { BrowserRouter as Router, Route, Routes, useRoutes} from 'react-router-dom'
import Team from './pages/thanh-vien'
import Page404NotFound from './pages/not-found'
import Profile from './pages/ca-nhan'
import MainLayout from './layouts/MainLayout'
import ProfileLayout from './layouts/ProfileLayout'
import Coin from './pages/ca-nhan/coin'
import MyCourse from './pages/ca-nhan/khoa-hoc'
import Payment from './pages/ca-nhan/lich-su-thanh-toan'
import Project from './pages/ca-nhan/du-an'
import { COURSE_DETAIL, PROFILE_COIN_PATH, PROFILE_COURSE_PATH, PROFILE_PATH, PROFILE_PAYMENT_PATH, PROFILE_PROJECT_PATH } from './config/path'
import CourseDetail from './pages/[slug]'

const router = [
  {
    element:<MainLayout/>,
    children:[
      {
      index:true,element:<Home/>
    },
    {
      path:'/hop-tac', element:<Contact/>
    },
    {
      path:'/thanh-vien', element:<Team/>
    },
    {
      path: COURSE_DETAIL, element:<CourseDetail/>
    },
    {
      path: PROFILE_PATH, element:<ProfileLayout/>,
      children:[{
          index:true,element:<Profile/>
      },
      {
        path: PROFILE_PROJECT_PATH, element:<Project/>,
      },
      {
        path: PROFILE_COURSE_PATH, element:<MyCourse/>,
      },
      {
        path: PROFILE_COIN_PATH, element:<Coin/>,
      },
      {
        path: PROFILE_PAYMENT_PATH, element:<Payment/>,
      }
      ]
    },
    {
      path:'*', element:<Page404NotFound/>
    }

  ]
  },
  {
    path:'*',element:<Page404NotFound/>
  }
]
function App() {
  const element = useRoutes(router)
   return (
    <>
    {element}
      {/* <Routes>
          <Route element={<MainLayout    />}>
            <Route path='/' element={<Home/>}/>
            <Route path='/hop-tac' element={<Contact/>}/>
            <Route path='/thanh-vien' element={<Team/>}/>
            <Route path='*' element={<Page404NotFound/>}/> 
            <Route path={COURSE_DETAIL} element={<CourseDetail/>}/> 
            <Route path={PROFILE_PATH} element={<ProfileLayout/>}>
               <Route index element={<Profile/> }  />
               <Route path={PROFILE_PROJECT_PATH} element={<Project /> }  />
               <Route path={PROFILE_COURSE_PATH} element={<MyCourse/> }  />
               <Route path={PROFILE_COIN_PATH} element={<Coin/> }  />
               <Route path={PROFILE_PAYMENT_PATH} element={<Payment/> }  />
            </Route>
          </Route>
      </Routes> */}
    </>
   )
}
export default App

