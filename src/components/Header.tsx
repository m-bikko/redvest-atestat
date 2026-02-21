'use client'

import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import { Mail } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

export default function Header({ lang, dict }: { lang: any, dict: any }) {
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
                    ? 'bg-background/90 backdrop-blur-lg shadow-sm border-b border-border py-2'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                <Link href={`/${lang}`} className="flex items-center gap-2 font-bold text-xl tracking-tight group">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <span className={`transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white drop-shadow-md'}`}>
                        Redvest Safety
                    </span>
                </Link>

                <nav className={`hidden md:flex items-center gap-8 text-sm font-semibold transition-colors duration-300 ${isScrolled ? 'text-muted-foreground' : 'text-white/90 drop-shadow'}`}>
                    <Link href={`/${lang}#services`} className="hover:text-primary transition-colors">
                        {dict.nav.services}
                    </Link>
                    <Link href={`/${lang}#about`} className="hover:text-primary transition-colors">
                        {dict.nav.about}
                    </Link>
                </nav>

                <div className={`flex items-center gap-4 transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white drop-shadow-md'}`}>
                    <div className="hidden md:block text-sm font-bold tracking-wide select-all">
                        info@redvest.kz
                    </div>
                    <div className={`${isScrolled ? 'bg-muted/50' : 'bg-white/20 backdrop-blur-sm'} rounded-md p-0.5`}>
                        <LanguageSwitcher currentLang={lang} isDark={!isScrolled} />
                    </div>
                </div>
            </div>
        </motion.header>
    )
}
