'use client'

import {
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';

export default function LightDarkToggle() {
  const onInputChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const html = document.documentElement
    html.classList.remove('light', 'dark');
    const newTheme = e.target.checked ? 'light' : 'dark'
    html.classList.add(newTheme);

    document.cookie = `theme=${newTheme};path=/;`

  }

  return (
    <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-secondary-500/5 p-0.5 inset-ring inset-ring-secondary-500/10 outline-offset-2 outline-accent-500 transition-colors duration-300 ease-in-out">
      <span className="relative size-5 rounded-full bg-secondary-500 shadow-xs ring-1 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5">
        <span
          aria-hidden="true"
          className="absolute inset-0 flex size-full items-center justify-center opacity-100 transition-opacity duration-200 ease-in group-has-checked:opacity-0 group-has-checked:duration-100 group-has-checked:ease-out"
        >
          <MoonIcon className="size-3 text-primary-500"/>
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-has-checked:opacity-100 group-has-checked:duration-200 group-has-checked:ease-in"
        >
          <SunIcon className="size-3 text-primary-500"/>
        </span>
      </span>
      <input
        name="theme"
        type="checkbox"
        aria-label="Toggle theme"
        className="absolute inset-0 appearance-none focus:outline-hidden cursor-pointer"
        onChange={onInputChange}
      />
    </div>
  )
}
