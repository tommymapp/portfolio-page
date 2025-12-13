'use client'

import Button from "./components/button"
import IconLink from "./components/iconLink"

import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Hero() {
  return (
    <section className="flex flex-col items-start gap-m">
        <div className="flex flex-col justify-start">
          <h1>Hi, I'm Tommy!</h1>
          <p className="opacity-50">A full-stack developer with strong interest in AWS who loves building and learning cool stuff. I'm based in Bristol - you can find more about me below :)</p>  
          <div className="flex justify-start gap-m pl-0 pt-2xs">
            <IconLink link="https://www.linkedin.com/in/tommymapp/" icon={FaLinkedin} classes='opacity-75' />
            <IconLink link="https://github.com/arkii1" icon={FaGithub} classes='opacity-75'/>
          </div>
        </div>
        
        <div className="flex gap-s">
          <Button text="Contact me" link='/contact' type="primary" />
          <Button text="View CV" onClick={() => window.open('/cv.pdf')} classes='' type="secondary"/>
        </div>
    </section>
  )
}
