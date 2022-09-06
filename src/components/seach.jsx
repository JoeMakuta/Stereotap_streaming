import { useState } from "react"
import Header from "./Header"
import { FiSearch } from 'react-icons/fi'
import img from '../Asserts/pexels-andrea-piacquadio-783243.jpg'
import Logo from '../Asserts/STEREOTAP  okay (1).png'
import { useEffect } from "react"


const CLIENT_ID = "54dd20a883734a9694e1230f65f26f5c"
const CLIENT_SECRET = '315d9419f0b24138b2160fd00d854dad'

function Search() {

   const [token, setToken] = useState(null)
   const [searchKey, setSearchKey] = useState('Passenger')
   const [albumData, setAlbumData] = useState([])

   let authificationParameters = {
      method: "POST",
      headers: {
         'Content-type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
   }

   useEffect(() => {
      fetch('https://accounts.spotify.com/api/token', authificationParameters)
         .then(result => result.json())
         .then(result => setToken(result.access_token))
   }, [])

   async function search() {
      let artistParameters = {
         method: 'GET',
         headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + token
         }

      }
      let artistId = await fetch('https://api.spotify.com/v1/search?q=' + searchKey + '&type=artist', artistParameters)
         .then(result => result.json())
         .then(result => {
            if (result.artists.items[0].id) {
               return result.artists.items[0].id
            }
         })
      console.log(artistId);

      let artistAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistId + '/albums?includes_groups=album&market=US&limit=5', artistParameters)
         .then(result => result.json())
         .then(result => result.items)
      setAlbumData(artistAlbums)
      console.log(albumData)

   }



   return (
      <div>

         <div
            className="bg-backOpacity h-fit w-[100%] p-10 rounded-3xl m-auto    backdrop-blur pb-20 mb-10 mt-10 app flex flex-col gap-3">
            {/* <div className="flex gap-60 justify-center items-center mb-4 w-96 m-auto" >
               <img src={Logo} alt="" className='w-40 block m-auto ' />
               <div className="flex gap-20 text-sm " >
                  <a href="">Artist</a>
                  <a href="">Album</a>
                  <a href="">Playlists</a>
               </div>
            </div> */}

            <div className="flex text-center items-center justify-center">
               <div className=" w-96 h-14 p-2 bg-white rounded-3xl flex justify-center items-center gap-3 ">
                  <FiSearch size={20} />
                  <input type="text" className="outline-none" placeholder="Search for you artist ..." onChange={elt => setSearchKey(elt.target.value)} onKeyPress={search
                  } />
               </div>


               {/* <button className=" bg-mainColor h-14 text-white p-5 outline-none  ">Search</button> */}
            </div>
            <h1 className=" font-bold text-3xl ml-10 " >Albums</h1>
            <div className="flex gap-6 items-center justify-center flex-wrap ">
               {
                  albumData.map((album, index) => {
                     return (
                        <div className="w-52  bg-white flex flex-col  mt-4 rounded-2xl cursor-pointer hover:shadow-2xl shadow-green-600 "  >
                           <img src={album.images[0].url} className=" rounded-t-xl" alt="" />
                           <div className=" p-5 ">
                              <p className="font-bold " >{album.artists[0].name}</p>
                              <p className=" text-sm ">{album.name}</p>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
            <h1 className=" font-bold text-3xl ml-10 " >Songs</h1>


         </div>


      </div>

   )
}

export default Search