import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchComponent from "./SearchComponent";
import { ShoppingCart, User } from "lucide-react";

export default function NavBarComponent() {

  return (
    <header className="z-100 overflow-clip ">
      <div className="flex justify-between items-center py-4 px-[120px]">
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
          <Link href="/cart" className="flex gap-1 items-center hover:underline">
            <ShoppingCart size={15} />
            <p>Cart</p>
          </Link>
          <Link href="/signup" className="flex gap-1 items-center hover:underline">
            <User size={15} />
            <p>Account</p>
          </Link>
        </nav>
      </div>
      <SearchComponent />
    </header>
  );
}
