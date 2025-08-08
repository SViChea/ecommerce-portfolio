'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import NavBarComponent from './NavBarComponent';

export default function NavBarWrapper() {
    const pathname = usePathname();
    const hiddenPathname = ["/login", "/signup", "/dashboard/admin"]
    const shouldHideNavbar = hiddenPathname.some((path) => path === pathname)
    if(shouldHideNavbar) return null

    return (
        <NavBarComponent />
    )
}
