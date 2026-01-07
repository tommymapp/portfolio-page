import AnimatedHeader from "@/app/ui/components/animatedHeader"
import Markdown from 'react-markdown'
import fs from 'fs'
import { notFound } from "next/navigation"
import './blogs.css'


export default async function Page({ params }: { params: Promise<{slug:string}>} ) {
    const { slug } = await params

    if(!fs.existsSync(`./public/blogs/${slug}/blog.md`)) {
        notFound()
    }

    const hero = fs.readFileSync(`./public/blogs/${slug}/hero.md`)
    const blog = fs.readFileSync(`./public/blogs/${slug}/blog.md`)

    return (
        <>
            <AnimatedHeader>
                <section className="w-full h-full flex flex-col justify-center align-center">
                    <Markdown>{hero.toString()}</Markdown>
                </section>
            </AnimatedHeader>
            <main>
                <article>
                    <Markdown>{blog.toString()}</Markdown>
                </article>
            </main>
        </>
    )
}