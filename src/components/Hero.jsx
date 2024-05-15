import React from 'react'
import Searchbar from './Searchbar'

function Hero() {
  return (
    <div className='w-[70%] m-auto my-20'>
        <div className="text-center text-3xl mb-5"><span className="text-black font-semibold font-['Figtree'] leading-7">Find Your Perfect Match, Find Your Perfect </span><span className="text-[#7FDBCA] text-normal font-semibold font-'Figtree' leading-7">Home</span></div>
        <div className="text-center ">
            <div className="mb-5 text-center text-gray-500 text-base font-normal font-['Acumin Pro'] leading-7">Find Your Perfect Roommate Match - Convenient, Affordable Living Awaits Shared Living Made Simple - Connect with Potential Roommates Now</div>
            <Searchbar />
        </div>
    </div>
  )
}

export default Hero