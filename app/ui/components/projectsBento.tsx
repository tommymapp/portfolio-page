export default function ProjectsBento() {
    return (
      <section id="projects">
        <h2>Personal projects</h2>
        <p className="opacity-50">Checkout what I've built recently</p>
        <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-6">
          <a href="https://www.cafe.tommymapp.dev" className="relative lg:col-span-3 mt-2 hover:mt-0 hover:pb-2 duration-300">
            <div className="absolute inset-0 rounded-lg bg-secondary-500/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src="/dnd_cafe.png"
                className="h-80 object-cover"
              />
              <div className="p-8">
                <h3 className="text-sm/4 font-semibold">DnD Cafe</h3>
                <p className="mt-2 font-medium tracking-tight">NextJS | TypeScript</p>
                <p className="max-w-lg opacity-50">
                  An imaginary single-page marketing site for DnD Cafe to practice NextJS.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
          </a>
          <a href="https://www.github.com/arkii1/TDDPractice" className="relative lg:col-span-3 mt-2 hover:mt-0 hover:pb-2 duration-300">
            <div className="absolute inset-0 rounded-lg bg-secondary-500/5 lg:rounded-tr-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="/tdd.svg"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-8">
                <h3 className="text-sm/4 font-semibold">TDD Practice</h3>
                <p className="mt-2 text-small font-medium tracking-tight">.Net | C#</p>
                <p className="max-w-lg opacity-50">
                  Upskilling my TDD knowledge by practicing on Code Katas with .Net.           
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 lg:rounded-tr-4xl" />
          </a>
        </div>
      </section>
    )
}