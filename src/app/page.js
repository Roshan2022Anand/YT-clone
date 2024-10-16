"use client"
import SideNav from '@/components/SideNav'
import TopNav from '@/components/TopNav'
import { fetchVideos } from '@/redux/slices/videos'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
const Page = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [])


  return (
    <>
      <TopNav />
      <mian className="flex h-full">
        <SideNav />
        <section className='grow'>
        </section>
      </mian>
    </>
  )
}

export default Page