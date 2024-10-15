
import React, { useContext } from 'react'
import HomeIcon from './nav-svg/HomeIcon'
import ShortsIcon from './nav-svg/ShortsIcon'
import SubIcon from './nav-svg/SubIcon'
import YouIcon from './nav-svg/YouIcon'
import { TheContext } from '@/helper/MyContext'
import { Copyright, HelpCircle, Menu, Settings, ShoppingBag } from 'lucide-react'
import HistoryIcon from './nav-svg/HistoryIcon'
import PlaylistIcon from './nav-svg/PlaylistIcon'
import VideoIcon from './nav-svg/VideoIcon'
import WatchIcon from './nav-svg/WatchIcon'
import LikeIcon from './nav-svg/LikeIcon'
import TrendingIcon from './nav-svg/TrendingIcon'
import MusicIcon from './nav-svg/MusicIcon'
import FilmsIcon from './nav-svg/FilmsIcon'
import LiveIcon from './nav-svg/LiveIcon'
import GameIcon from './nav-svg/GameIcon'
import NewsIcon from './nav-svg/NewsIcon'
import SportIcon from './nav-svg/SportIcon'
import CourseIcon from './nav-svg/CourseIcon'
import FashionIcon from './nav-svg/FashionIcon'
import PodcastsIcon from './nav-svg/PodcastsIcon'
import ReportIcon from './nav-svg/ReportIcon'
import FeedbackIcon from './nav-svg/FeedbackIcon'

const SideNav = () => {
  const { openMoreNav, setopenMoreNav } = useContext(TheContext);
  return (
    <>
      {/* Static nav */}
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

      {openMoreNav ? <div className='fixed top-0 w-full h-full bg-[#0f0f0f3a] '></div> : null}

      {/* More nav options */}
      <nav className='fixed w-[16rem] h-full top-0 bg-[--primary-bg-color] transition-transform ' style={{ transform: openMoreNav ? "" : "translate(-100%,0%)" }}>

        <section className='flex justify-center mt-6'>
          <button className='round-btn' onClick={() => { setopenMoreNav(false) }}><Menu /></button>
          <img src="/logo.jpg" alt="logo" className="w-1/2 h-fit" />
        </section>
        <div className='h-full overflow-y-scroll'>
          <section className='more-nav-options mt-3' style={{ border: "none" }}>
            <button>
              <HomeIcon />
              Home</button>
            <button>
              <ShortsIcon />
              Shorts</button>
            <button>
              <SubIcon />
              Subscriptions</button>
          </section>
          <section className="more-nav-options">
            <button className='font-bold'>You {'>'}</button>
            <button><YouIcon />Your channel</button>
            <button><HistoryIcon />History</button>
            <button><PlaylistIcon />Playlists</button>
            <button><VideoIcon />Your videos</button>
            <button><WatchIcon />Watch Later</button>
            <button><LikeIcon />Liked Videos</button>
          </section>
          <section className="more-nav-options">
            <p>Subscriptions</p>
            <p>Show more</p>
          </section>
          <section className="more-nav-options">
            <p>Explore</p>
            <button><TrendingIcon />Trending</button>
            <button><ShoppingBag />Shopping</button>
            <button><MusicIcon />Music</button>
            <button><FilmsIcon />Flims</button>
            <button><LiveIcon />Live</button>
            <button><GameIcon />Gaming</button>
            <button><NewsIcon />News</button>
            <button><SportIcon />Sport</button>
            <button><CourseIcon />Courses</button>
            <button><FashionIcon />Fashion & beauty</button>
            <button><PodcastsIcon />Podcasts</button>
          </section>
          <section className="more-nav-options">
            <p>More from YouTube</p>
            <button><img src="\More-YT\YTpremium.svg" alt="" />YouTube Premium</button>
            <button><img src="\More-YT\YTstudio.svg" alt="" />YouTube Studio</button>
            <button><img src="\More-YT\YTmusic.svg" alt="" />YouTube Music</button>
            <button><img src="\More-YT\YTkids.svg" alt="" />YouTube Kids</button>
          </section>
          <section className="more-nav-options">
            <button><Settings />Settings</button>
            <button><ReportIcon />Report history</button>
            <button><HelpCircle />Help</button>
            <button><FeedbackIcon />Send feedback</button>
          </section>
          <section className="more-nav-options">
            <h6>About Press copyright Contact us Creator Advertise Developers</h6>
            <h6>Terms Privacy Policy & Safety How YouTube works Test new features</h6>
          </section>
        </div>

      </nav>
    </>
  )
}

export default SideNav
