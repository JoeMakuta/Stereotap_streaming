import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/main'
import Login from './components/login'

function App() {
  return (<div className='font-mainFont bg-mainBackground text-mainColor pr-10 pl-10 bg-cover h-screen flex flex-col'>
    <Header />
    <Main />
    {/* <Login /> */}
  </div>)
}

export default App
