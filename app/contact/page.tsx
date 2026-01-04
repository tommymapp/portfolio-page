'use client'

import Button from "../ui/components/button";
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import AnimatedHeader from "../ui/components/animatedHeader";

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export default function Page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const reqBody = {
            name,
            email,
            message,
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                reqBody
            );
            alert('Email successfully sent!');
        } catch (error) {
            alert('Email failed to send :( Please contact me manually via tommy.mapp@hotmail.com.');
        }
    };


    return (
        <>
            <AnimatedHeader>
                <section className="flex justify-between items-center sm:items-center w-full h-full">
                    <div>
                        <h1 className="font-bold">Contact me</h1>
                    <p className="text-lg mt-2">Please use the form below to contact me, or alternativley message me on <a className="underline" target="_blank" href="https://www.linkedin.com/in/tommymapp/">LinkedIn</a>.</p>
                    </div>
                </section>
            </AnimatedHeader>
            <main>
                <section>
                    <h3>Form</h3>
                    <form aria-label="Contact form" onSubmit={submitForm} className="flex flex-col gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm opacity-75">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="rounded-md bg-secondary-500/5 px-2xs py-3xs outline-1 -outline-offset-1 outline-secondary-500/10 placeholder:text-secondary-500/20"
                                onChange={(e) => setName(e.target.value) }
                                placeholder="Name..."
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm opacity-75">
                                Email*
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="rounded-md bg-secondary-500/5 px-2xs py-3xs outline-1 -outline-offset-1 outline-secondary-500/10 placeholder:text-secondary-500/20"
                                onChange={(e) => setEmail(e.target.value) }
                                required
                                placeholder="Email..."
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm opacity-75">
                                Message*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={12}
                                className="rounded-md bg-secondary-500/5 px-2xs py-3xs outline-1 -outline-offset-1 outline-secondary-500/10 placeholder:text-secondary-500/20"
                                defaultValue={''}
                                onChange={(e) => setMessage(e.target.value) }
                                required
                                placeholder="Message..."
                            />
                        </div>
                        <div className="flex justify-end mt-6">
                            <Button
                                text="Submit"
                                ariaLabel="Click to send email"
                                htmlType="submit"
                            />
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}