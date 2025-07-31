import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavBarComponent() {
  return (
    <header>
        <div className='flex justify-between items-center py-6'>
            <Image 
            src={"/images/Walmart_logo.png"}
            alt="Logo"
            width={180}
            height={50}
            unoptimized
            />

            <nav className='flex gap-8'>
                <Link href="/cart" className='flex gap-1 items-center'>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>Cart</p>
                </Link>
                <Link href="/account" className='flex gap-1 items-center'>
                    <i className="fa-regular fa-user"></i>
                    <p>Account</p>
                </Link>
            </nav>
        </div>

        <div className='flex justify-between items-center py-2]'>
            <form action="" className='flex items-center gap-2 border border-gray-300 px-5 py-1 rounded-lg'>
                <select name="" id="" className='border-none outline-none' >
                    <option value="">All Categories</option>
                    <option value="">Electronics</option>
                    <option value="">Fashion</option>
                    <option value="">Home & Garden</option>
                </select>
                <hr className="w-9 rotate-90"/>
                <input 
                type="text" 
                placeholder='Search for products' 
                className='w-full p-2 border-none outline-none rounded-lg'
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </form>
            
            <nav>
                <ul className='flex gap-10'>
                    <li>Deals</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
