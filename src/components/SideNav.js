
import React, { useContext } from 'react'
import HomeIcon from './nav-svg/HomeIcon'
import ShortsIcon from './nav-svg/ShortsIcon'
import SubIcon from './nav-svg/SubIcon'
import YouIcon from './nav-svg/YouIcon'
import { TheContext } from '@/helper/MyContext'
import { Menu } from 'lucide-react'

const SideNav = () => {
  const { openMoreNav, setopenMoreNav } = useContext(TheContext);

  return (
    <>
      <nav className='side-nav-static hidden md:flex'>
        <button className="home">
          <HomeIcon />
          Home</button>
        <button className="shorts">
          <ShortsIcon />
          Shorts</button>
        <button className="subscription">
          <SubIcon />
          Subscriptions</button>
        <button className="you">
          <YouIcon />
          You</button>
      </nav>
      {openMoreNav ?
        <div className='fixed top-0 w-full h-full bg-[#0f0f0f3a] '></div> : null}

      <nav className='fixed w-[15rem] h-full top-0 bg-[--primary-bg-color] transition-transform ' style={{ transform: openMoreNav ? "" : "translate(-100%,0%)" }}>

        <section className='flex border justify-center mt-6'>
          <button className='round-btn' onClick={() => { setopenMoreNav(false) }}><Menu /></button>
          <img src="/logo.jpg" alt="logo" className="w-1/2 h-fit" />
        </section>
      </nav>
    </>
  )
}

export default SideNav
