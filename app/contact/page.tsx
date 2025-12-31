'use client'

import Button from "../ui/components/button";
import emailjs from '@emailjs/browser';
import { useState } from 'react';

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
        <form className="flex flex-col gap-2xs w-full h-screen justify-center" aria-label="Contact form" onSubmit={submitForm}>
            <div className="flex flex-col gap-3xs">
                <label htmlFor="name" className="text-sm/6 font-semibold">
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="rounded-md bg-secondary-500/5 px-2xs py-3xs outline-1 -outline-offset-1 outline-secondary-500/10 placeholder:text-secondary-500/20"
                    onChange={(e) => setName(e.target.value) }
                    required
                />
            </div>
            <div className="flex flex-col gap-3xs">
                <label htmlFor="email" className="text-sm/6 font-semibold">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="rounded-md bg-secondary-500/5 px-2xs py-3xs outline-1 -outline-offset-1 outline-secondary-500/10 placeholder:text-secondary-500/20"
                    onChange={(e) => setEmail(e.target.value) }
                    required
                />
            </div>
            <div className="flex flex-col gap-3xs">
                <label htmlFor="message" className="text-sm/6 font-semibold">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="rounded-md bg-secondary-500/5 px-2xs py-3xs outline-1 -outline-offset-1 outline-secondary-500/10 placeholder:text-secondary-500/20"
                    defaultValue={''}
                    onChange={(e) => setMessage(e.target.value) }
                    required
                />
            </div>
            <div className="mt-8 flex justify-end">
                <Button
                    text="Send message"
                    ariaLabel="Click to send email"
                    htmlType="submit"
                />
            </div>
        </form>
    )
}