"use client"
import React from 'react'
import {
  authenticatedLinksList,
  unauthenticatedLinksList
} from '@/app/routes'
import Link from 'next/link'
import { useAuth } from '@/app/(modules)/authentication/(infrastucture)/(context)/AuthContext'
import { BUTTON_STYLES } from '@/app/(styles)'

const Navbar = () => {

  const navbarClassnames = `
      w-full 
      h-20

      lg:px-8

      bg-[#252525] 
      fixed 
      flex 
      justify-between 
      items-center
      bottom-0
      lg:top-0
      lg:bottom-auto
      lg:relative
      lg:bg-transparent

      z-50
  `
  const { isLogged, signOut } = useAuth()

  return (
    <nav className={navbarClassnames}>
      <Link
        href="/"
        className='hidden lg:block mr-auto font-bold'
      >Fitness App</Link>

      <div className='lg:flex lg:justify-between grid grid-cols-1 lg:grid-cols-4 gap-1 w-full lg:w-auto'>
        {
          isLogged
            ? authenticatedLinksList.map(link => link)
            : unauthenticatedLinksList.map(link => link)
        }
        {
          isLogged &&
          <Link
            href={"/"}
            className={`${BUTTON_STYLES}`}
            onClick={signOut}
          >Log Out</Link>
        }
      </div>
    </nav>
  )
}

export default Navbar