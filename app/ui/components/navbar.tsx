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
        route: '/'
    },
    {
        label: 'Contact',
        route: '/contact'
    },
    {
        label: 'CV',
        route: '/cv.pdf'
    }
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return <>
        {/* Menu button */}
        <Bars3Icon onClick={() => setOpen(true)} className='absolute top-xs left-xs w-l h-l cursor-pointer'/>
    
        {/* Background */}
        {open && (
        <div
          className="fixed inset-0 bg-primary/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side sheet */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-primary-500 shadow w-5/6 z-50
          transform transition-transform duration-300 ease-out
          ${open ? 'translate-x-0 ' : '-translate-x-full'}
        `}
      >
        {/* Close button */}
        <XMarkIcon
          onClick={() => setOpen(false)}
          className="absolute top-xs right-xs w-m h-m cursor-pointer"
        />

        {/* Content */}
        <nav className="p-m flex flex-col gap-s">
           {links.map(({label, route } : {label: string, route: string}) => 
                <Link onClick={() => setOpen(false)} key={route} href={route} className={`${pathname == route ? 'font-bold text-accent' : ''}`}>{label}</Link>
            )}
        </nav>
      </aside>
    </>
}