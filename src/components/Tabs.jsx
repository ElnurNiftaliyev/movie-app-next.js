"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Tabs = () => {
const searchParams = useSearchParams()

const genre = searchParams.get('genre')


    const tabs = [
        {
            name: "Popular",
            url:"popular"
        },
        {
            name: "Latest",
            url: "latest"
        },
        {
            name: "Coming Soon",
            url:"upcoming"
        }
    ]

  return (
    <div className='p-5 m-5 bg-gray-100  dark:bg-gray-900 flex items-center justify-center gap-x-10'>
        {tabs.map((tab,i)=>(
            <Link className={`cursor-pointer hover:opacity-80 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-yellow-900 " : ""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
        ))
        }


    </div>
  )
}

export default Tabs