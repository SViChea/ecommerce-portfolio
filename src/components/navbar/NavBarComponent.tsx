import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchComponent from "./SearchComponent";
import { ShoppingCart, User } from "lucide-react";
import { useAppSelector } from "@/redux/hook";
import { Button } from "../ui/button";

export default function NavBarComponent() {
  const { itemsCount } = useAppSelector((state) => state.cart);

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
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs bg-red-600 text-white rounded-full">
                  {itemsCount}
                </span>
            </Button>
          </Link>
          <Link
            href="/signup"
            className="flex gap-1 items-center hover:underline"
          >
            <User size={15} />
            <p>Account</p>
          </Link>
        </nav>
      </div>
      <SearchComponent />
    </header>
  );
}
