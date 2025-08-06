"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { MenuItems } from "./menu";

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    router.push(`/shop?search=${encodeURIComponent(val)}`);
  };

  const pathname = usePathname();
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

      <nav className="flex gap-10">
        {
        MenuItems.filter((menu) => {
          return menu.active == true ? menu : ""
        }).map((item, index) => (
          <Link
            key={index}
            className={`${pathname == item.path ? "text-blue-500" : ""}`}
            href={item.path}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
