import React from 'react'
import { 
    authenticatedLinksList, 
    unauthenticatedLinksList 
} from '@/app/routes'
import Link from 'next/link'

interface NavbarProps {
    isLogged: boolean
}

const Navbar = ({ isLogged = false }: NavbarProps) => {

  return (
    <nav className={`
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
          `}>
          <Link
            href="/"
            className='hidden lg:block mr-auto'
        >Fitness App</Link>

          <div className='lg:flex lg:justify-between grid grid-cols-4 gap-1 w-full lg:w-auto'>
            {
              isLogged
                ? authenticatedLinksList.map(link => link)
                : unauthenticatedLinksList.map(link => link)
            }
          </div>
        </nav>
  )
}

export default Navbar