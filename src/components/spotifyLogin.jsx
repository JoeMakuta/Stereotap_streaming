
import Logo from '../Asserts/STEREOTAP  okay (1).png'
import { FcGoogle } from 'react-icons/fc'
import { ImSpotify } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Header from './Header';

function SpotifyLogin() {
   const client_id = '54dd20a883734a9694e1230f65f26f5c';
   const redirect_uri = 'http://localhost:5173/Search'
   const endpoint_spotify = 'https://accounts.spotify.com/authorize'
   const response_type = 'token'

   return (
      <div>
         <div
            className="bg-backOpacity h-[80vh] w-[80%] mt-12  rounded-3xl m-auto   flex flex-col text-center items-center justify-center backdrop-blur">
            <img src={Logo} alt="" className='w-60 block m-auto ' />
            <div className=' flex flex-col gap-5 ' >
               <h1 className='text-4xl tracking-tighter font-bold '>Continue with a spotify account</h1>
               <a href={`${endpoint_spotify}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`}

                  className='w-96 h-10 m-auto  text-mainColor border-mainColor  border-[1px] rounded-full  flex justify-center items-center gap-3 hover:text-green-600 '>
                  <ImSpotify />SPOTIFY
               </a>
            </div>
            <div className='block m-auto w-72 text-xs '>
               <p>
                  We bring artists from all over the world in your headphones for you to listen to.
               </p>
            </div>
         </div>
      </div>
   )
}

export default SpotifyLogin