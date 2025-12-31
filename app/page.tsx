import Hero from "./ui/hero"

export default function Home() {
  return (
    <>
      <Hero/>
      <section className="" id="projects">
        <h2 >Personal projects</h2>
        <p className="opacity-50 mt-2">Checkout what I've built</p>  

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <a href="https://www.cafe.tommymapp.dev" className="relative lg:col-span-3 mt-2 hover:mt-0 hover:pb-2 duration-300">
            <div className="absolute inset-0 rounded-lg bg-secondary-500/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src="/dnd_cafe.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-accent">DnD Cafe</h3>
                <p className="mt-2 text-lg font-medium tracking-tight">NextJS sandbox</p>
                <p className="mt-2 max-w-lg text-sm/6 opacity-50">
                  An imaginary single-page marketing site for DnD Cafe to practice NextJS.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
          </a>
          <div className="relative lg:col-span-3 mt-2 hover:mt-0 hover:pb-2 duration-300">
            <div className="absolute inset-0 rounded-lg bg-secondary-500/5 lg:rounded-tr-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="/"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-accent">TBD</h3>
                <p className="mt-2 text-lg font-medium tracking-tight">TBD</p>
                <p className="mt-2 max-w-lg text-sm/6 opacity-50">
                  TBD               
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 lg:rounded-tr-4xl" />
          </div>
          <div className="relative lg:col-span-2 mt-2 hover:mt-0 hover:pb-2 duration-300">
            <div className="absolute inset-0 rounded-lg bg-secondary-500/5 lg:rounded-bl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src="/"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-accent">TBD</h3>
                <p className="mt-2 text-lg font-medium tracking-tight">TBD</p>
                <p className="mt-2 max-w-lg text-sm/6 opacity-50">
                  TBD
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 lg:rounded-bl-4xl" />
          </div>
          <div className="relative lg:col-span-2 mt-2 hover:mt-0 hover:pb-2 duration-300">
            <div className="absolute inset-0 rounded-lg bg-secondary-500/5" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt=""
                src="/"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-accent">TBD</h3>
                <p className="mt-2 text-lg font-medium tracking-tight">TBD</p>
                <p className="mt-2 max-w-lg text-sm/6 opacity-50">
                  TBD
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15" />
          </div>
          <div className="relative lg:col-span-2 mt-2 hover:mt-0 hover:pb-2 duration-300">
            <div className="absolute inset-0 rounded-lg bg-secondary-500/5 max-lg:rounded-b-4xl lg:rounded-br-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="/"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-accent">TBD</h3>
                <p className="mt-2 text-lg font-medium tracking-tight">TBD</p>
                <p className="mt-2 max-w-lg text-sm/6 opacity-50">
                  TBD
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-br-4xl" />
          </div>
        </div>
      </section>
        
    </>
    
  )
}
