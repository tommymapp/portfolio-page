import AnimatedHeader from "../ui/components/animatedHeader"
import Link from "next/link"

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
                        <h2>Recent blogs</h2>
                        <p className="text-sm mt-2 opacity-75">Wait, I actually need to write something...</p>
                        <p>Well, until I do the next iteration here's a <Link className="underline" href="/blogs/hello-world">working example</Link></p>
                    </section>
                </main>
            </>
        )

}