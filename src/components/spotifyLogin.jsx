
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

   const [token, setToken] = useState('')
   const navigate = useNavigate(null)



   return (
      <div>
         <Header />
         <div
            className="bg-backOpacity h-[80vh] w-[90%] items-center justify-center rounded-3xl m-auto   flex flex-col text-center backdrop-blur">

            <a href={`${endpoint_spotify}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`}

               className='w-80 h-10 mt-6  m-auto border-none text-white border-mainColor bg-green-600 flex justify-center items-center gap-5 hover:text-white hover:bg-green-700  '>
               <ImSpotify /> Continue with SPOTIFY
            </a>


         </div>

      </div>

   )
}

export default SpotifyLogin