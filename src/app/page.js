"use client"
import SideNav from '@/components/SideNav'
import TopNav from '@/components/TopNav'
import React from 'react'

const page = () => {
  return (
    <>
      <TopNav />
      <mian className="flex h-full">
        <SideNav />
        <section className='grow'></section>
      </mian>
    </>
  )
}

export default page