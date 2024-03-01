"use client"

import Image from 'next/image'
import React from 'react'
import { distDir } from '../../next.config'
import { useRouter } from 'next/navigation'

const Movies = ({dt, i}) => {
    const router = useRouter();

  return (
    <div onClick={()=>router.push(`/movie/${dt?.id}`)} className="min-w-[450px] imgContainer relative">
        <Image style={{objectFit:'cover'}} width={450} height={300} key={i} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}/>
        
        <div className='absolute bottom-0 p-2 w-full h-full  flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'>
            <div className='text-xl font-mono font-bold text-white'>{dt?.title} </div>
            <div className='text-sm text-white font-mono'>{dt?.release_date} - {dt?.vote_average}</div>
        </div>


    </div>
  )
}

export default Movies