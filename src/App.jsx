import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Nutrition from './components/Nutrition/Nutrition'
import Workouts from './components/Workouts/Workouts'
import Profile from './components/Profile/Profile'

function App() {

  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/nutrition' element={<Nutrition/>}/>
        <Route path='/workouts' element={<Workouts/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
