import Movies from '@/components/Movies'
import React from 'react'

const Page = async({searchParams}) => {
const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=b37c04a4e6a0f68c76efea44c1f4c273&language=en-US&page=1`,{next:{revalidate:10000}})
const data  = await res.json()

return (
   <div className='flex items-center flex-wrap justify-center gap-3'>{
      data?.results?.map((dt,i)=>(
        <Movies key={i} i={i} dt={dt}/> 
      ))
    }</div>
  )
}

export default Page