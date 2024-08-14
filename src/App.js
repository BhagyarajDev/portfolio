import React from 'react'
import Home from './Component/Home'
import './App.css'
import Skill from './Component/Skill'
import Project from './Component/Project'

const App = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden'>
      <Home/>
      <Skill/>
      <Project/>

    </div>
  )
}

export default App