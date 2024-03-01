import Link from 'next/link'
import React from 'react'

const MenuItems = ({mn}) => {
  return (
    <Link href={mn.url}>{mn.name}</Link>
  )
}

export default MenuItems