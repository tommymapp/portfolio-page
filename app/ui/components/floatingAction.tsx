'use client'

import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function FloatingAction() {
  const [atProjects, setAtProjects] = useState(false)
  const [currentText, setCurrentText] = useState('View Projects')

  useEffect(() => {
    const isMobile = window.innerWidth < 640

    const projects = document.getElementById('projects')
    if(!projects)
      throw new Error('No project section found')

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAtProjects(entry.isIntersecting)
        
        if(isMobile) {
          setCurrentText('')
        }
        else {
          const text:string = entry.isIntersecting ? 'Return Home' : 'View Projects'
          setCurrentText(text)
        }
      },
      {
        threshold: 0,
        rootMargin: isMobile 
          ? '-20% 0px -60% 0px'
          : '-40% 0px -40% 0px'
      }
    )

    observer.observe(projects)
    return () => observer.disconnect()
  }, [])

  const onClick = () => {
    if (atProjects) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById('projects')?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <button
      onClick={onClick}
      aria-label={atProjects ? 'Scroll to top' : 'Scroll to projects'}
      className={`
        p-2 sm:px-6 sm:py-2 
        duration-300
        gap-3
        bg-secondary-500 text-primary-500
        rounded-full 
        flex items-center
        fixed right-4 bottom-6
        cursor-pointer
        animate-bob
        z-50
      `}
    >
        <ArrowDownIcon
          className={`
            h-6 w-6
            transition-transform duration-500 ease-in-out
            ${atProjects ? '-rotate-180' : 'rotate-0'}
          `}
        />

      <span className='hidden sm:block'>
        {currentText}
      </span>
      
    </button>
  )
}
