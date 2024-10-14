import SideNav from '@/components/SideNav'
import TopNav from '@/components/TopNav'
import { Main } from 'next/document'
import React from 'react'

const page = () => {
  return (
    <>
      <TopNav />
      <SideNav />
      <mian></mian>
    </>
  )
}

export default page