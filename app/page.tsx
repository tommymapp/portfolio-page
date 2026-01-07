'use client'

import AnimatedHeader from "./ui/components/animatedHeader";
import IconLink from "./ui/components/iconLink"
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import Image from "next/image";
import CareerTimeline from "./ui/components/careerTimeline";

export default function Home() {
  return (
    <>
      <AnimatedHeader variant="hero">
        <section className="h-full w-full flex justify-around gap-12 items-center relative">
          <div>
            <h1 id="hero-title" className="font-bold">Hi, I'm <span className="underline">Tommy Mapp</span></h1>
            <p className="text-xl mt-2">A product-minded engineer shipping software from frontend to AWS-powered infrastructure</p>
            <div className="flex justify-start gap-6 mt-4">
              <IconLink link="https://www.linkedin.com/in/tommymapp/" icon={FaLinkedin} classes='opacity-75 duration-100 hover:opacity-100' ariaLabel="Go to Tommy's LinkedIn page" />
              <IconLink link="https://github.com/arkii1" icon={FaGithub} classes='opacity-75 duration-100 hover:opacity-100' ariaLabel="Go to Tommy's GitHub page"/>
            </div>
            <a className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 text-lg cursor-pointer" onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}>
               <FaArrowDown className="inline h-6 w-6 mr-1.5"/> Learn more
            </a>
          </div>
          
          <Image src="/selfie.jpg" alt="Tommy looking extremeley cool" width="300" height="150" className="hidden sm:block border-4 border-secondary-500 w-80 h-80 object-cover min-w-80 shadow-xl"/>
        </section>
      </AnimatedHeader>
      <main>
        <CareerTimeline />        
      </main>
    </>
    
  )
}
