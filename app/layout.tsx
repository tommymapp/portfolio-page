import "./globals.css";
import Navbar from "./ui/components/navbar";
import LightDarkToggle from "./ui/components/lightDarkToggle";

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
        className={`antialiased relative overflow-x-hidden flex flex-col items-center  transition-colors duration-300 ease-in-out`}
      >
        <div className="fixed right-xs top-5">
          <LightDarkToggle />
        </div>
        <Navbar />

        <main className="flex flex-col items-center justify-center w-screen p-s max-w-[1028px]">{children}</main>

        <div 
          className="fixed h-screen w-full overflow-hidden bg-secondary/50 flex items-center justify-center top-50 pointer-events-none"
          aria-hidden="true"
          >
            <div className="sheet sheet-1" />
            <div className="sheet sheet-2" />
            <div className="sheet sheet-3" />
        </div>

      </body>
    </html>
  );
}
