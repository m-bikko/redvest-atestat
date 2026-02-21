'use client'

import { getDictionary, Locale } from '@/get-dictionary'
import { ContactForm } from './ContactForm'
import Image from 'next/image'
import bgImage from '../../public/refinery_night_bg.png'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero({ lang, dict }: { lang: Locale, dict: any }) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-black">
            {/* Background Image using next/image for reliable loading and optimization */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src={bgImage}
                    alt="Refinery Background"
                    fill
                    priority
                    placeholder="blur"
                    className="object-cover"
                />
                {/* Subtle animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent z-0" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* USP Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-white max-w-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 border border-primary/50 text-primary-foreground text-sm font-semibold tracking-wide uppercase"
                    >
                        Redvest Industrial Safety
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
                        {dict.hero.usp.split(' ').map((word: string, i: number) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1), duration: 0.6 }}
                                className="inline-block mr-3"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="h-2 bg-primary rounded-full drop-shadow-md"
                    />
                </motion.div>

                {/* Floating Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="w-full lg:ml-auto"
                >
                    <div className="bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden group hover:border-white/40 transition-colors duration-500">
                        {/* Glossy reflection effect */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent -skew-y-12 transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" />

                        <h2 className="text-3xl font-bold mb-8 text-white text-center drop-shadow-md">
                            {dict.hero.formTitle}
                        </h2>
                        {mounted && <ContactForm dict={dict} isDark={true} />}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
