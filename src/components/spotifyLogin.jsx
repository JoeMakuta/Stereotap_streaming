
import Logo from '../Asserts/STEREOTAP  okay (1).png'
import { FcGoogle } from 'react-icons/fc'
import { ImSpotify } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'

function SpotifyLogin() {
   const client_id = '54dd20a883734a9694e1230f65f26f5c';
   const redirect_uri = 'http://localhost:5173/Header'
   const endpoint_spotify = 'https://accounts.spotify.com/authorize'
   const response_type = 'token'


   const navigate = useNavigate(null)
   return (
      <div className="bg-backOpacity w-3/4 h-3/4 rounded-3xl m-auto   flex flex-col text-center backdrop-blur">
         <img src={Logo} alt="" className='w-60 block m-auto ' />


         <a href={`${endpoint_spotify}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`} className='w-80 h-10 mt-6  m-auto border-none text-white border-mainColor bg-green-600 flex justify-center items-center gap-5 '>
            <ImSpotify /> Continue with SPOTIFY
         </a>

         <div className='block m-auto w-72 text-xs '>
            <p>
               We bring artists from all over the world in your headphones for you to listen to.
            </p>
         </div>
      </div>
   )
}

export default SpotifyLogin