import { useState } from "react"
import Header from "./Header"
import { FiSearch } from 'react-icons/fi'
import img from '../Asserts/pexels-andrea-piacquadio-783243.jpg'
import Logo from '../Asserts/STEREOTAP  okay (1).png'
import { useEffect } from "react"
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { AiFillPlayCircle } from 'react-icons/ai'


const CLIENT_ID = "54dd20a883734a9694e1230f65f26f5c"
const CLIENT_SECRET = '315d9419f0b24138b2160fd00d854dad'

function Search() {

   const [token, setToken] = useState(null)
   const [searchKey, setSearchKey] = useState('Daphne')
   const [albumData, setAlbumData] = useState([])
   const [mySource, setMySource] = useState('')
   const [showIframe, setShowIframe] = useState(false)
   const [artistData, setArtistData] = useState([])
   const [songs, setSongs] = useState([])
   const [songId, setSongId] = useState('0FmfRErQFP13h77PKWCawW')


   let artistParameters = {
      method: 'GET',
      headers: {
         'Content-type': 'application/json',
         'Authorization': 'Bearer ' + token
      }
   }

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
         .then(result => setToken(result.access_token));
      search();
   }, [])

   async function search() {

      let artistId = await fetch('https://api.spotify.com/v1/search?q=' + searchKey + '&type=artist&limit=6', artistParameters)
         .then(result => result.json())
         .then(result => {
            if (result.artists.items[0].id) {
               // console.log(result.artists.items);
               setArtistData(result.artists.items)
               return result.artists.items[0].id
            }
         })
      fetchAlbums(artistId)
      searchSong()
      console.log('The artists data are : ', artistData);
   }

   const searchSong = async () => {
      let searchedSongs = await fetch('https://api.spotify.com/v1/search?q=' + searchKey + '&type=track&limit=10', artistParameters)
         .then(songs => songs.json())
         .then(songs => songs)
      setSongs(searchedSongs.tracks.items)
      console.log('The songs are : ', songs);
   }

   const fetchAlbums = async (trackId) => {
      await fetch('https://api.spotify.com/v1/search?q=' + searchKey + '&type=album&limit=10', artistParameters)
         .then(result => result.json())
         .then(result => { setAlbumData(result.albums.items); console.log("The albums are : ", result.albums.items); })
      // console.log(albumData)
   }

   function displayIframe(type, id) {
      // console.log('The id is : ' + id);
      setMySource("https://open.spotify.com/embed/" + type + "/" + id + "?utm_source=generator")
      setShowIframe(true)
   }

   return (
      <div>
         {/* <Header /> */}
         <div className="flex text-center items-center mb-10 mt-10 justify-center">
            <div className=" w-96 h-14 p-2 bg-white rounded-3xl flex justify-center items-center gap-3 fixed z-20 "  >
               <FiSearch size={0} />
               <input type="text" className="outline-none" placeholder="Search for you artist ..." onChange={elt => setSearchKey(elt.target.value)} onKeyPress={search
               } onLoad={search
               } />
            </div>
            {/* <button className=" bg-mainColor h-14 text-white p-5 outline-none  ">Search</button> */}
         </div>


         <div
            className="bg-backOpacity h-fit w-[100%] p-3 rounded-3xl m-auto    backdrop-blur pb-20 mb-10 flex flex-col gap-3">
            {/* <div className="flex gap-60 justify-center items-center mb-4 w-96 m-auto" >
               <img src={Logo} alt="" className='w-40 block m-auto ' />
               <div className="flex gap-20 text-sm " >
                  <a href="">Artist</a>
                  <a href="">Album</a>
                  <a href="">Playlists</a>
               </div>
            </div> */}


            <div >
               <h1 className=" font-bold text-3xl mt-10 ml-10 " >Artists</h1>
               <div className=" w-[100%] flex gap-6  mt-8 items-start justify-center flex-wrap ">
                  {
                     artistData.map((artist, index) => {
                        return (
                           <div key={index} className="w-40 bg-neutral-900 bg-opacity-5  hover:scale-105 transition-all  flex flex-col items-center  p-5 gap-5 rounded-2xl cursor-pointer hover:shadow-2xl " onClick={() => { displayIframe("artist", artist.id) }} >
                              <img src={artist && artist.images && artist.images[0]?.url} className=" rounded-full w-40 " alt="" />
                              <div className="text-center">
                                 <p className="font-bold " >{artist.name}</p>
                                 <p className=" text-xs ">Artist</p>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
            </div>

            <h1 className=" font-bold text-3xl ml-10 mt-10" >Albums</h1>
            <div className="flex gap-6 items-start justify-center flex-wrap ">
               {
                  albumData.map((album, index) => {
                     return (
                        <div key={index} className="w-60 hover:scale-105 bg-neutral-900 bg-opacity-5  transition-all flex flex-col  mt-4 rounded-2xl cursor-pointer hover:shadow-2xl shadow-green-600 text-sm " onClick={() => { displayIframe("album", album.id) }} >
                           <img src={album.images[0].url} className=" rounded-t-xl " alt="" />
                           <div className=" p-3 ">
                              <p className="font-bold " >{album.name}</p>
                              <p className=" text-sm ">{album.artists[0].name}</p>
                           </div>
                           {/* <div className="m-auto absolute top-16 hover:top-0 transition-all w-52 h-72 rounded-2xl  hover:opacity-100 opacity-0 flex items-center justify-center ">
                              <BsFillPlayCircleFill className="  " size={100} />

                           </div> */}
                        </div>
                     )
                  })
               }
            </div>

            <div>
               <div className="  p-10 rounded-xl ">
                  <h1 className=" font-bold text-3xl ml-10 " >Songs</h1>
                  {/* < iframe src={"https://open.spotify.com/embed/track/" + songId + "?utm_source=generator"} width="90%" height={100} className=" mt-10 mb-5 m-auto " ></iframe> */}
                  <div className=" w-[100%]  overflow-x-auto flex flex-row  items-start justify-center flex-wrap ">
                     {
                        songs.map((song, index) => {
                           return (
                              <div key={index} title="Click to play" className="w-[90%] hover:scale-105 hover:bg-neutral-900 hover:bg-opacity-10   transition-all  flex flex-row items-center  p-2 gap-5 cursor-pointer " onClick={() => displayIframe("track", song.id)} >
                                 <p>{index + 1}</p>
                                 <img src={song && song.album && song.album.images[0]?.url} className=" rounded-full w-10 " alt="" />


                                 <div>
                                    <p className="font-bold w-60 " >{song.name}</p>
                                    <p className=" w-60" > {song.artists[0].name}</p>
                                 </div>
                                 <p className=" text-xs w-60 ">Song</p>
                                 <p className=" text-end w-96" >{parseInt(song.duration_ms / 60000)}:{parseInt((song.duration_ms % 60000) / 3600).toString().padStart(2, 0)}</p>
                              </div>
                           )
                        })

                     }
                  </div>

               </div>

            </div>

         </div>

         {showIframe && <iframe src={mySource} width="94%" height='80' className="  rounded-lg   z-10 fixed mt-10  m-auto block mb-5 bottom-0 " frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" ></iframe>
         }
      </div>


   )
}

export default Search