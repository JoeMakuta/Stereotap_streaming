import Logo from '../Asserts/STEREOTAP  okay (1).png'
import { FcGoogle } from 'react-icons/fc'

function Login() {
   return (
      <div className="bg-white w-96 h-3/4 rounded-3xl m-auto   flex flex-col text-center backdrop-blur">
         <img src={Logo} alt="" className='w-60 block m-auto ' />
         <div className='w-80 m-auto text-left flex flex-col gap-2'>
            <p>Email</p>
            <input type="text" className='w-80 h-8 border border-mainColor block m-auto' />
            <p>Password</p>

            <input type="text" className='w-80 h-8 border border-mainColor block m-auto' />
            <button className='w-80 h-10 mt-6  m-auto border-none text-white border-mainColor bg-green-600 flex justify-center items-center gap-5 '>
          
            CONNEXION
         </button>
         </div>
         <button className='w-96 h-10  m-auto border-none border-mainColor rounded-full flex justify-center items-center gap-5 '>
            <FcGoogle />
            Sign in with google
         </button>
         <div className='block m-auto w-72 text-xs '>
            <p>
               We bring artists from all over the world in your headphones for you to listen to.
            </p>
         </div>
      </div>
   )
}

export default Login