import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <div className='fixed w-full h-[6vh] backdrop-blur-sm flex justify-end  items-center gap-10 px-10'>
        <Link href={"/"} className='font-bold text-md cursor-pointer'>Home</Link>
        <Link href={"/about"} className='font-bold text-md cursor-pointer'>About</Link>
        <Link href={"/contact"} className='font-bold text-md cursor-pointer'>Contact</Link>
    </div>
  )
}

export default Navigation
