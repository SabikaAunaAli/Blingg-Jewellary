import React from 'react'

function Loader() {
  return (
 

    <div class="flex items-center justify-center h-screen w-screen absolute z-50 bg-white">
    <div class="relative">

        <div class="h-14 w-14 rounded-full border-t-8 border-b-8 border-orange-200"></div>
        <div class=" absolute top-0 left-0  h-14 w-14 rounded-full border-t-8 border-b-8 border-orange-500 animate-spin">
        </div>
     
    </div>
    <span class="text-3xl ml-5 font-extrabold text-transparent bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text">Loading...</span>
</div>
  )
}

export default Loader
