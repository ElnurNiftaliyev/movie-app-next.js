"use client"

import React, {useEffect, useState} from 'react'
import { MdDarkMode } from "react-icons/md";
import { useTheme } from 'next-themes'
import { CiLight } from "react-icons/ci";

const ThemeComp = () => {
    const {systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] =useState(false)
    
    useEffect(()=>{
        setMounted(true)
    },[])
const themeMode=theme === "system" ? systemTheme : theme
  return (
    <div>
        {
            mounted && (
                themeMode === "dark" ?  <CiLight onClick={()=> setTheme("light")} className="cursor-pointer" size={24}/> : <MdDarkMode onClick={()=> setTheme("dark")} className="cursor-pointer" size={24}/>
            )
        }
      </div>
  )
}

export default ThemeComp