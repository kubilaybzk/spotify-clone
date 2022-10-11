import React, { useEffect } from 'react'
import { currentlyPlaying } from '../store';


export default function Hero() {
  console.log("render oldu hero")
  const getcurrentlyPlaying = currentlyPlaying((state) => state.playing);
  const setcurrentlyPlaying = currentlyPlaying((state) => state.setPlaying);

  useEffect(()=>{
    setcurrentlyPlaying()
  },[])
  
  console.log(getcurrentlyPlaying)
  return (
    <div className='bg-Secondary w-full relative flex flex-row items-center justify-center'>
      <img className='w-fit opacity-20' src={getcurrentlyPlaying&&getcurrentlyPlaying.item.album.images[0].url} alt=""/>
      <div className='absolute'>
        <span>{getcurrentlyPlaying&&getcurrentlyPlaying.item.album.name}</span>
      </div>
    </div>
  )
}
