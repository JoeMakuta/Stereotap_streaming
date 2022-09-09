import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/main'
import Login from './components/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SpotifyLogin from './components/spotifyLogin'
import Search from './components/seach'

function HomePage() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}


function App() {


  return (<div className='font-mainFont bg-mainBackground bg-repeat  text-mainColor pr-10 pl-10 bg-cover  flex flex-col'>
    <BrowserRouter>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path='/' element={<Login />} />
        <Route path='/SpotifyLogin' element={<SpotifyLogin />} />
        <Route path='/Search' element={<Search />} />

      </Routes>
    </BrowserRouter>

  </div>)
}

export default App
