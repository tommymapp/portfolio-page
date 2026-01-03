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
        const text:string = entry.isIntersecting ? 'Return Home' : 'View Projects'
        setCurrentText(text)
      },
      {
        threshold: 0,
        rootMargin: isMobile ? '-20% 0px -60% 0px' : '0% 0px 0% 0px'
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
      className="
        px-xs
        py-2xs
        gap-2.5
        bg-secondary-500 text-primary-500
        rounded-full 
        flex items-center
        fixed -right-s mr-l bottom-s
        cursor-pointer
        animate-bob
        z-50
      "
    >
      {currentText}
      <ArrowDownIcon
        className={`
          h-m w-m
          transition-transform duration-500 ease-in-out
          ${atProjects ? '-rotate-180' : 'rotate-0'}
        `}
      />
    </button>
  )
}
