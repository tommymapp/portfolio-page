'use client'

import { usePathname } from 'next/navigation'
import UnderlineLink from './underlineLink';

const links = [
    {
        label: 'Home',
        route: '/',
        ariaLabel: 'Home page'
    },
    {
        label: 'Blogs',
        route: '/blogs',
        ariaLabel: 'Blogs page'
    },
    {
        label: 'Contact',
        route: '/contact',
        ariaLabel: 'Contact page'
    },
    {
        label: 'CV',
        route: '/cv.pdf',
        ariaLabel: 'View CV'
    }
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="w-screen flex gap-8 justify-center absolute inset-0 h-min z-10">
            {links.map(({label, route, ariaLabel } : {label: string, route: string, ariaLabel: string}) => 
              <UnderlineLink key={route} href={route} isActive={pathname == route} ariaLabel={ariaLabel} label={label}/>
            )}
        </nav>
    )
}