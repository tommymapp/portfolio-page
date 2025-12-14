'use client'

import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const links = [
    {
        label: 'Home',
        route: '/',
        ariaLabel: 'Home page'
    },

    {
        label: 'Contact',
        route: '/contact',
        ariaLabel: 'Contact page'
    }
    // {
    //     label: 'CV',
    //     route: '/cv.pdf',
    //     ariaLabel: 'View CV'
    // }
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return <>
        {/* Menu button */}
        <button className='fixed top-xs left-xs  cursor-pointer' onClick={() => setOpen(true)} aria-label="Open main menu" aria-expanded={open}>
          <Bars3Icon  className="w-m h-m"/>
        </button>
    
        {/* Background */}
        {open && (
        <div
          className="fixed inset-0 bg-primary-500/40 z-40 cursor-pointer"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side sheet */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-primary-500 shadow w-4xl z-50
          transform transition-transform duration-300 ease-out
          ${open ? 'translate-x-0 ' : '-translate-x-full'}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute top-xs right-xs cursor-pointer"
        >
          <XMarkIcon
            className="w-m h-m"
          />
        </button>
        

        {/* Content */}
        <nav className="p-m flex flex-col gap-s mt-xs">
           {links.map(({label, route, ariaLabel } : {label: string, route: string, ariaLabel: string}) => 
                <Link onClick={() => setOpen(false)} key={route} href={route} className={`hover:bg-accent/20 p-3xs rounded-md ${pathname == route ? 'font-bold text-accent' : ''}`} aria-label={ariaLabel}>{label}</Link>
            )}
        </nav>
      </aside>
    </>
}