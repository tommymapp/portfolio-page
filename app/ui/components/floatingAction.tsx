'use client'

import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function FloatingAction() {
  const [atProjects, setAtProjects] = useState(false)

  useEffect(() => {
    const projects = document.getElementById('projects')
    if (!projects) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAtProjects(entry.isIntersecting)
      },
      {
        threshold: 0.4,
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
        fixed -right-s mr-l bottom-s
        cursor-pointer
        animate-bob
        z-50
      "
    >
      <ArrowDownIcon
        className={`
          h-l w-l
          bg-secondary-500 text-primary-500
          rounded-full p-4xs
          transition-transform duration-500 ease-in-out
          ${atProjects ? '-rotate-180' : 'rotate-0'}
        `}
      />
    </button>
  )
}
