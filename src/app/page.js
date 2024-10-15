"use client"
import SideNav from '@/components/SideNav'
import TopNav from '@/components/TopNav'
import { decrement, increment } from '@/redux/slices/counterSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();
  return (
    <>
      <TopNav />
      <mian className="flex h-full">
        <SideNav />
        <section className='grow border flex justify-center items-center gap-10'>
          <button onClick={() => { dispatch(increment()) }} className='p-3 bg-gray-500 text-white rounded-lg'>+</button>
          <p className='text-white'>Count:{ count}</p>
          <button onClick={() => { dispatch(decrement()) }} className='p-3 bg-gray-500 text-white rounded-lg'>-</button>
        </section>
      </mian>
    </>
  )
}

export default page