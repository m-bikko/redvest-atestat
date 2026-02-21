'use client'

import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function AtestatHeader({ lang }: { lang: string }) {
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50)
    })

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background/90 backdrop-blur-lg shadow-sm border-b border-border py-4 text-foreground'
                : 'bg-transparent py-6 text-slate-900'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                <Link href={`/${lang}/atestat`} className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <span className="font-extrabold tracking-wider">
                        REDVEST SYSTEM
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="#about" className="hover:text-orange-600 transition-colors">
                        О компании
                    </Link>
                    <Link href="#services" className="hover:text-orange-600 transition-colors">
                        Услуги
                    </Link>
                    <Link href="#projects" className="hover:text-orange-600 transition-colors">
                        Кейсы
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button
                        variant={isScrolled ? 'outline' : 'outline'}
                        className={isScrolled ? '' : 'border-slate-900/20 text-slate-900 hover:bg-slate-900 hover:text-white'}
                        asChild
                    >
                        <Link href="#contact">Связаться с нами</Link>
                    </Button>
                </div>
            </div>
        </motion.header>
    )
}
