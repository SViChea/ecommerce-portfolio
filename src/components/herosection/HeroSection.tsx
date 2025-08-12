import { Italic } from 'lucide-react'
import React from 'react'

export default function HeroSection() {
  const size = 40
  const bold = 600
  const italic = 'normal'
  return (
    <main className='bg-[url(/images/herobackground.jpg)] bg-cover w-fill h-[500px] rounded-2xl mt-5 p-20 mx-[120px]'>
        <div className='flex flex-col gap-2'>
          <p className='font-bold w-[700px] text-white leading-[1]' style={{fontSize: `${size}px`, fontWeight: `${bold}`, fontStyle: `${italic}`}}>Fresh Vegetables Big discount</p>
          <p className='font-medium text-[30px] text-white pt-5'>Save up to 50% off on your first order</p>
          <form action="" className='bg-white pl-4 rounded-full border-none outline-none w-fit mt-10'>
            <input type="text" name="email" id="email" placeholder="Enter your email" className='border-none outline-none'/>
            <button type="submit" className='bg-[#3BB77E] px-4 py-2 rounded-full text-white'>Subscribe</button> 
          </form>
        </div>
    </main>
  )
}
