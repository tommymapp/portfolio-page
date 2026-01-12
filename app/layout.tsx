import "./globals.css";
import Navbar from "./ui/components/navbar";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],      // choose subsets you need
  variable: "--font-outfit", // optional CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Tommy Mapp | Full-Stack Developer</title>
        <meta name="description" content="Tommy Mapp — full-stack developer experienced in AWS (SAA-003), .Net, ReactJS, ExpressJS, MySQL and modern development practices. Bristol based. See portfolio to contact me." />
        <meta property="og:title" content="Tommy Mapp | Portfolio" />
        <meta property="og:description" content="Tommy Mapp — full-stack developer experienced in AWS (SAA-003), .Net, ReactJS, ExpressJS, MySQL and modern development practices. Bristol based. See portfolio to contact me." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tommymapp.dev/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://tommymapp.dev/" />
      </head>
      <body
        className={`scroll-smooth bg-primary-500 text-secondary-500 antialiased relative overflow-x-hidden flex flex-col items-center transition-colors duration-300 ease-in-out ${outfit.className} pb-12`}
      >
        <Navbar />
        {children}          
        <footer className="mt-12 flex flex-col items-center text-center">
          <p>©2025-{new Date().getFullYear()} Tommy Mapp  | All rights reserved</p>
          <small className="opacity-50 mt-1 font-thin">Icons from Heroicons, React Icons, and Tech Stack Icons | Company logos used for informational purposes only</small>
        </footer>
      </body>
    </html>
  );
}
