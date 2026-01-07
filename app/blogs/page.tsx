import AnimatedHeader from "../ui/components/animatedHeader"

export default function Page() {
     return (
            <>
                <AnimatedHeader>
                    <section className="flex flex-col justify-center items-start w-full h-full">
                        <h1 className="font-bold">Blogs</h1>
                        <p className="text-lg mt-2">Honestly, I'm only writing this to rememeber what I've learned.</p>
                    </section>
                </AnimatedHeader>
                <main>
                    <section>
                        <h3>Recent blogs</h3>
                        <p className="text-sm mt-2 opacity-75">Wait, I actually need to write something...</p>
                    </section>
                </main>
            </>
        )

}