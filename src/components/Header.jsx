import { useEffect } from 'react'
import logo from '../Asserts/STEREOTAP  okay (1).png'
import Main from './main'


function Header() {

   useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem('token')
      if (!token && hash) {
         token = hash.substring(1).split('&').find(element => element.startsWith('access_token')).split('=')[1]
         console.log(token);
         window.location.hash = ''
         window.localStorage.setItem('token', token)
         setToken(token)
      }
   }, [])

   return (
      <div className='flex text-center w-full justify-between h-20'>
         <img src={logo} className='w-56' />
         <div className='flex w-2/5 justify-around items-center'>
            <a href="" className=' font-bold  '>Home</a>
            <a href="">About</a>
            <a href="">Discover</a>
            {/* <button className='  w-20 h-10 border hover:bg-mainColor hover:text-white rounded-lg border-mainColor '>Login</button> */}


            <button className='w-1/5 h-10 border hover:scale-105 transition-transform bg-mainColor text-white rounded-lg border-mainColor hover:bg-inherit hover:text-mainColor '>Get started</button>


         </div>
      </div>

   )
}

export default Header