import Logo from '../Asserts/STEREOTAP  okay (1).png'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import SpotifyLogin from './spotifyLogin';


function Login() {

   const navigation = useNavigate(null)

   const clientId = '830343232707-8fb7nakkdppk2fl9nirjnjl6c328lihs.apps.googleusercontent.com';

   useEffect(() => {
      const initClient = () => {
         gapi.client.init({
            clientId: clientId,
            scope: ''
         });
      };
      gapi.load('client:auth2', initClient);
   });

   const onSuccess = (res) => {
      navigation('/SpotifyLogin')
      console.log('success:', res);
   };
   const onFailure = (err) => {
      console.log('failed:', err);
   };


   return (
      <div className="bg-backOpacity w-3/4 h-3/4 rounded-3xl m-auto   flex flex-col text-center backdrop-blur">
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

         <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={false}
            className='w-80 h-10  m-auto border-none flex justify-center items-center drop-shadow-none '
         />


         <div className='block m-auto w-72 text-xs '>
            <p>
               We bring artists from all over the world in your headphones for you to listen to.
            </p>
         </div>
      </div>
   )
}

export default Login