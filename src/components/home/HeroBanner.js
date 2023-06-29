import React from 'react'

const HeroBanner = () => {
  return (
    <div className=' h-[100vh] bg-white  justify-center items-center flex '>
        <div className='h-4/5 w-screen mask'> 
        <video src="./homepage.mp4" className="absolute h-full w-full object-fill"  autoPlay loop muted />
        </div>
    </div>

  )
}

export default HeroBanner