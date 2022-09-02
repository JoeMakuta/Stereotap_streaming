import Header from "./Header"



function Search() {




   return (
      <div>
         <Header />
         <div
            className="bg-backOpacity h-[80vh] w-[90%] items-center justify-center rounded-3xl m-auto   flex text-center backdrop-blur">

            <input type="text" className=" w-96 h-20 p-5 outline-none  " placeholder="Search for you artist ..." />
            <button className=" bg-stone-700 h-20 text-white p-5 outline-none  ">Search</button>



         </div>

      </div>

   )
}

export default Search