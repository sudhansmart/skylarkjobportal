import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'


import { Signin } from './Components/Signin'
import { Jobs } from './Components/Jobs'
import { Contact } from './Components/Contact'
import Notification from './Components/Notification'
import Findjob from './Components/Findjob'

import { Forms } from './Components/Forms'
import Logins from './Components/Logins'



function App() {
 
  return (
  <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/forms' element={<Forms/>}/>
      <Route path='/logs' element={<Logins/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/jobs' element={<Findjob/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/notification' element={<Notification/>}/>
    </Routes>
  </div>
  )
}

export default App
