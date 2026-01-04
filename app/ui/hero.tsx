'use client'

import Button from "./components/button"
import IconLink from "./components/iconLink"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import FloatingAction from "./components/floatingAction";


export default function Hero() {
  return (
    <section className="flex flex-col items-start justify-center h-screen gap-2" aria-labelledby="hero-title" role="region">
          <h1 id="hero-title">Hi, I'm <span className="text-accent">Tommy!</span></h1>
          <p className="opacity-50 mt-2">A full-stack web developer certified in AWS (SAA-003) who loves building and learning cool stuff. I'm based in Bristol - you can find more about me below :)</p>  
          <div className="flex justify-start gap-6 mt-4">
            <IconLink link="https://www.linkedin.com/in/tommymapp/" icon={FaLinkedin} classes='opacity-75' ariaLabel="Go to Tommy's LinkedIn page" />
            <IconLink link="https://github.com/arkii1" icon={FaGithub} classes='opacity-75' ariaLabel="Go to Tommy's GitHub page"/>
          </div>
          <div className="flex gap-4 mt-6">
            <Button text="Contact me" link='/contact' variant="primary" ariaLabel="Go to Contact me page"/>
            <Button text="View CV" link='/cv.pdf' variant="secondary" ariaLabel="Go to Contact me page"/>
          </div>
          <FloatingAction />
    </section>
  )
}
