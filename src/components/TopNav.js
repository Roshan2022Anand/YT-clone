import { TheContext } from '@/helper/MyContext';
import { useMediaQuery } from '@mui/material';
import { Bell, Menu, Mic, MicIcon, MoveLeft, Search, User, VideotapeIcon } from 'lucide-react'
import React, { useContext,useState } from 'react'

const TopNav = () => {
  const {setopenMoreNav}=useContext(TheContext);
  //All media queries
  const isMobile = useMediaQuery('(min-width: 654px)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  //all states are defined here
  const [mobileSrchBar, setmobileSrchBar] = useState(false);

  return (
    <nav className='top-nav'>
      {mobileSrchBar && !isMobile ?
        <>
          <button onClick={() => { setmobileSrchBar(false) }}><MoveLeft /></button>
          <div className="w-2/3 border-2 border-[var(--secondary-bg-color)] rounded-2xl  flex">
            <input type="text" className='bg-transparent w-3/4 px-1' placeholder='Search' />
            <button className="srch-btn bg-[var(--secondary-bg-color)] grow " style={{
              borderRadius: "0px 10px 10px 0px",
            }}><Search className='mx-auto' /></button>
          </div>
          <button className='md:bg-[var(--secondary-bg-color)] rounded-full p-1'><Mic /></button>
        </> :
        <>
          <section className='w-1/4 h-fit items-center gap-2'>
            <button className='ml-9 round-btn' onClick={()=>{setopenMoreNav(true)}}><Menu /></button>
            <img src="/logo.jpg" alt="logo" className="logo w-1/2 h-fit" />
          </section>

          <section className='w-1/2 md:justify-center justify-end gap-3'>
            {isMobile ?
              <div className="w-2/3 border-2 border-[var(--secondary-bg-color)] rounded-2xl  flex">
                <input type="text" className='bg-transparent w-3/4 px-1' placeholder='Search' />
                <button className="srch-btn bg-[var(--secondary-bg-color)] grow " style={{
                  borderRadius: "0px 10px 10px 0px",
                }}><Search className='mx-auto' /></button>
              </div> :
              <button onClick={() => { setmobileSrchBar(true) }}><Search /></button>
            }
            <button className='md:bg-[var(--secondary-bg-color)] rounded-full p-1 fill-none'><MicIcon /></button>
          </section>

          <section className='w-1/4 justify-evenly'>
            <button className='round-btn'><VideotapeIcon /></button>
            <button className='round-btn'><Bell /></button>
            <button className='round-btn'><User /></button>
          </section>
        </>
      }
    </nav>
  )
}

export default TopNav