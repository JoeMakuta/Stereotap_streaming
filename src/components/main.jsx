import { useNavigate } from "react-router-dom"


function Main_left() {
   const navigate = useNavigate(null)
   return <div className="w-1/2 flex flex-col gap-8 h-96 justify-center   pl-10 mt-14">

      <div>
         <h3>MEET STEREOTAPE</h3>
         <h1 className="font-bold text-6xl">Feed your soul with Sterotape</h1>

      </div>

      <div className=" w-80 ">
         <p>We bring artists from all over the world in your headphones for you to listen to.</p>
      </div>
      <div className=" flex gap-10 items-center" >
         <button onClick={() => {
            navigate('/spotifyLogin')
         }} className='w-40 h-10 border bg-mainColor text-white  border-mainColor hover:bg-inherit hover:text-mainColor '>Get started</button>
         <a href="" className=" hover:text-cyan-700 " >Learn more</a>
      </div>
   </div>
}

function Main_right() {

   return <div className="w-1/2  ">
      <div className=" relative left-96 top-11 bg-yellow-300 rounded-xl animate-pulse w-32 text-center p-3 h-20 ">
         <p className=" text-left ">Users</p>
         <h1 className=" text-3xl font-bold " >+120M</h1>
      </div>
      <div className=" relative left-64 top-80 bg-green-500 rounded-xl w-32  text-center p-3 h-20 ">
         <p className=" text-left ">Users</p>
         <h1 className=" text-3xl font-bold " >+120M</h1>
      </div>
      <div className=" relative right-20 top-60 bg-slate-400 rounded-xl w-32 animate-pulse text-center p-3 h-20 ">
         <p className=" text-left ">Users</p>
         <h1 className=" text-3xl font-bold " >+120M</h1>
      </div>
   </div>
}



function Main() {
   return <div className="flex">
      <Main_left />
      <Main_right />

   </div>
}

export default Main