import ProjectsBento from "./ui/components/projectsBento"
import AnimatedHeader from "./ui/components/animatedHeader";
import IconLink from "./ui/components/iconLink"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <AnimatedHeader variant="hero">
        <section className="h-full w-full flex justify-around gap-20 items-center">
          <div>
            <h1 id="hero-title" className="font-bold">Hi, I'm <span className="underline">Tommy Mapp</span>. A full-stack developer who loves building high-quality solutions.</h1>
            <div className="flex justify-start gap-6 mt-8">
              <IconLink link="https://www.linkedin.com/in/tommymapp/" icon={FaLinkedin} classes='opacity-75 duration-100 hover:opacity-100' ariaLabel="Go to Tommy's LinkedIn page" />
              <IconLink link="https://github.com/arkii1" icon={FaGithub} classes='opacity-75 duration-100 hover:opacity-100' ariaLabel="Go to Tommy's GitHub page"/>
            </div>
          </div>
          
          <Image src="/selfie.jpg" alt="Tommy looking extremeley cool" width="300" height="150" className="hidden sm:block border-4 border-secondary-500 w-80 h-80 object-cover min-w-80 shadow-xl"/>
        </section>
      </AnimatedHeader>
      <main>
        <ProjectsBento />
      </main>
    </>
    
  )
}
