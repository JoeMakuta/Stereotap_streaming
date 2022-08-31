
import Logo from '../Asserts/STEREOTAP  okay (1).png'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

function SpotifyLogin() {
   return (
      <div className="bg-backOpacity w-3/4 h-3/4 rounded-3xl m-auto   flex flex-col text-center backdrop-blur">
         <img src={Logo} alt="" className='w-60 block m-auto ' />


         <button className='w-80 h-10 mt-6  m-auto border-none text-white border-mainColor bg-green-600 flex justify-center items-center gap-5 '>
            Continue with SPOTIFY
         </button>

         <div className='block m-auto w-72 text-xs '>
            <p>
               We bring artists from all over the world in your headphones for you to listen to.
            </p>
         </div>
      </div>
   )
}

export default SpotifyLogin