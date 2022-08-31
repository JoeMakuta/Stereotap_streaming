import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/main'
import Login from './components/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SpotifyLogin from './components/spotifyLogin'


function App() {

  return (<div className='font-mainFont bg-mainBackground text-mainColor pr-10 pl-10 bg-cover h-screen flex flex-col'>
    <BrowserRouter>
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path='/' element={<Login />} />
        <Route path='/SpotifyLogin' element={<SpotifyLogin />} />
      </Routes>
    </BrowserRouter>

  </div>)
}

export default App
