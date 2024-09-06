'use client'

import { Link, animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import Nav from '@/components/nav'
import MobileNav from '@/components/mobileNav'

const Header = () => {
  return (
    <header className='fixed z-50 w-full bg-primary py-4 xl:py-4'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* logo */}
        <Link to='/' spy={true} smooth={true} className='cursor-pointer flex'>
          <Image src='/logo.svg' height={70} width={70} alt='logo' />
          <Image src='/souvik.svg' height={300} width={300} alt='logo' />
        </Link>

        {/* disktop nav */}
        <div className='hidden items-center gap-x-8 xl:flex'>
          <Nav />
          <Link
            to='/'
            spy={true}
            smooth={true}
            className='text-md rounded-full bg-blue px-6 py-2 font-medium text-white transition-all hover:bg-blue/80'
          >
            Watch Me (Live)
          </Link>
        </div>
        {/* mobile nav */}
        <div className='z-50 xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
