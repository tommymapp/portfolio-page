'use client'

import AnimatedHeader from "./ui/components/animatedHeader";
import IconLink from "./ui/components/iconLink"
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import Image from "next/image";
import CareerTimeline from "./ui/components/careerTimeline";
import HowIHelp from "./ui/components/howIHelp";

export default function Home() {
  return (
    <>
      <AnimatedHeader variant="hero">
        <section className="h-full w-full flex flex-col-reverse flex-reverse md:flex-row justify-center gap-10 md:gap-12 items-center relative md:px-8">
          <div className="">
            <h1 id="hero-title" className="font-bold">Hi, I'm <span className="underline">Tommy Mapp</span></h1>
            <p className="text-xl mt-2">A product-minded engineer shipping software from frontend to AWS-powered infrastructure</p>
            <div className="flex justify-start gap-6 mt-4">
              <IconLink link="https://www.linkedin.com/in/tommymapp/" icon={FaLinkedin} classes='opacity-75 duration-100 hover:opacity-100' ariaLabel="Go to Tommy's LinkedIn page" />
              <IconLink link="https://github.com/arkii1" icon={FaGithub} classes='opacity-75 duration-100 hover:opacity-100' ariaLabel="Go to Tommy's GitHub page"/>
            </div>
            <a className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-6 text-lg cursor-pointer" onClick={() => document.getElementById('howIHelp')?.scrollIntoView({ behavior: 'smooth' })}>
               <FaArrowDown className="inline h-6 w-6 mr-1.5"/> Learn more
            </a>
          </div>
          
          <div className="relative">
              <Image src="/selfie.jpg" alt="Tommy looking extremeley cool" width="300" height="150" className="border-4 border-secondary-500 w-50 h-50 sm:w-70 sm:h-70 md:w-80 md:h-80 object-cover md:min-w-80 shadow-xl rounded-3xl -skew-y-3"/>
              <a href="https://www.credly.com/badges/5b17ba33-d3e3-431b-acbf-915179e4c46a" target="_blank">
                <Image className="absolute h-28 w-28 md:h-32 md:w-32 right-0 bottom-0 translate-1/4 text-shadow-lg" width={160} height={160} src={"/aws-saa-003.png"} alt="AWS Solutions Architect Associate badge"/>
              </a>
          </div>
          
        </section>
      </AnimatedHeader>
      <main>
        <HowIHelp />
        <CareerTimeline />        
      </main>
    </>
    
  )
}
