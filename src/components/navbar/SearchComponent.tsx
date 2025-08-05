'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SearchComponent() {
      const [query, setQuery] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    router.push(`/shop?search=${encodeURIComponent(val)}`);
  };
  return (
    <div className="flex justify-between items-center py-2]">
        <form
          action=""
          className="flex items-center gap-2 border border-gray-300 px-5 py-1 rounded-lg"
        >
          <select name="" id="" className="border-none outline-none">
            <option value="">All Categories</option>
            <option value="">Electronics</option>
            <option value="">Fashion</option>
            <option value="">Home & Garden</option>
          </select>
          <hr className="w-9 rotate-90" />
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search for products"
            className="w-full p-2 border-none outline-none rounded-lg"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>

        <nav>
          <ul className="flex gap-10">
            <li>
              <Link href="/deals">Deals</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}
