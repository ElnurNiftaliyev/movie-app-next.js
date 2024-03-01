"use client"
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import MenuItems from './MenuItems';
import ThemeComp from './ThemeComp';
import { useRouter } from 'next/navigation';

const Header = () => {
    const [keyword,setKeyword] = useState('')
    const router = useRouter()
    const menu = [
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Sign in",
            url: "/login"
        }
    ]
    const searchFunc = (e) =>{
         if(e.key === "Enter" && keyword.length>= 3){
            router.push(`/search/${keyword}`)
            setKeyword('')
         }
    }

    return (
        <div className='flex items-center gap-5 h-20 p-5'>
            <div className='bg-green-500 mr-[1200px] p-3 rounded-lg font-bold text-2xl'>MovieApp</div>
            <div className='flex items-center gap-x-4 border p-3 rounded-lg'>
                <input value={keyword} onKeyDown={searchFunc} onChange={e=>setKeyword(e.target.value)} className='outline-none bg-transparent' placeholder='Search' type='text' />
                <IoIosSearch size={25} />
            </div>
            <ThemeComp/>
            {
            menu.map((mn,i)=>(
                <MenuItems mn={mn} key={i}/>
            ))
        }
        </div>
        
      


    )
}

export default Header