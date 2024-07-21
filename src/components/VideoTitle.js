import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='overflow-x-hidden px-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video pt-[16%]'>
        <h1 className= 'text-6xl mb-2 font-bold '>{title}</h1>
        <p className= 'text-lg mb-2 max-w-[500px] w-full mx-0 text-ellipsis'>{overview}</p>
        <div className='flex gap-3'>
            <button className='border-solid font-semibold text-white bg-gray-500 py-1 px-8 border-2 border-gray-500 rounded-lg'>Play</button>
            <button className='border-solid  font-semibold border-gray-500 py-1 px-8 border-2 text-white bg-gray-500 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle