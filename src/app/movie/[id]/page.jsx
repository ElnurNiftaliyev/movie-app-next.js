import React from 'react'
import Image from 'next/image'
const getMovie = async (id)=>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b37c04a4e6a0f68c76efea44c1f4c273`)
    return await res.json()
}

const Page = async ({params}) => {
    const id = params.id;
    const movieDetail = await getMovie(id)

  return (
    <div className='relative p-7 min-h-screen'>
        <Image style={{objectFit:'cover'}} fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}/>
        <div className='absolute'>
            <div className='font-mono text-6xl font-bold m-3'>{movieDetail?.title}</div>
            <div className='w-1/2 font-sans text-xl font-medium m-3'>{movieDetail?.overview}</div>
            <div className='font-sans text-xl font-bold m-3'>{movieDetail?.release_date}</div>
            <div className='font-sans text-xl font-bold m-3'>IMDB: {movieDetail?.vote_average}</div>
            <div className=' my-5 text-2xl border border-black w-32 p-2 rounded-md text-center cursor-pointer hover:bg-gray-400'>Trail</div>
            
        </div>

    </div>
  )
}

export default Page