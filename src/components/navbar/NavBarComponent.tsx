import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchComponent from "./SearchComponent";

export default function NavBarComponent() {

  return (
    <header>
      <div className="flex justify-between items-center py-6">
        <Link href="/" className="flex gap-1 items-center">
          <Image
            src={"/images/Walmart_logo.png"}
            alt="Logo"
            width={180}
            height={50}
            unoptimized
          />
        </Link>

        <nav className="flex gap-8">
          <Link href="/cart" className="flex gap-1 items-center">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Cart</p>
          </Link>
          <Link href="/account" className="flex gap-1 items-center">
            <i className="fa-regular fa-user"></i>
            <p>Account</p>
          </Link>
        </nav>
      </div>
      <SearchComponent />
    </header>
  );
}
