import "./globals.css";
import Navbar from "./ui/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Welcome :)</title>
      </head>
      <body
        className={`antialiased relative`}
      >
        <Navbar />

        <main className="flex flex-col items-center justify-center h-screen w-screen p-s">{children}</main>
        <div className="absolute h-screen w-full overflow-hidden bg-secondary/50 flex items-center justify-center -bottom-1/4 pointer-events-none
">
          <div className="">
            <div className="sheet sheet-1" />
            <div className="sheet sheet-2" />
            <div className="sheet sheet-3" />
          </div>
        </div>

      </body>
    </html>
  );
}
