'use client'

import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function AtestatHeader({ lang }: { lang: string }) {
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50)
    })

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
    const closeMobileMenu = () => setIsMobileMenuOpen(false)

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
                <Link href={`/${lang}`} className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <span className="font-extrabold tracking-wider">
                        REDVEST SYSTEM
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#about" className="hover:text-orange-600 transition-colors">
                        О компании
                    </a>
                    <a href="#services" className="hover:text-orange-600 transition-colors">
                        Услуги
                    </a>
                    <a href="#projects" className="hover:text-orange-600 transition-colors">
                        Кейсы
                    </a>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <Button
                            variant={isScrolled ? 'outline' : 'outline'}
                            className={isScrolled ? '' : 'border-slate-900/20 text-slate-900 hover:bg-slate-900 hover:text-white'}
                            asChild
                        >
                            <a href="#contact">Связаться с нами</a>
                        </Button>
                    </div>

                    <button
                        className="md:hidden p-2 text-slate-900 focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={28} className={isScrolled ? 'text-slate-900' : 'text-slate-900'} /> : <Menu size={28} className={isScrolled ? 'text-slate-900' : 'text-slate-900'} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-border overflow-hidden"
                    >
                        <nav className="flex flex-col px-4 py-8 space-y-6 text-center">
                            <a href="#about" onClick={closeMobileMenu} className="text-xl font-medium text-slate-900 hover:text-orange-600 transition-colors">
                                О компании
                            </a>
                            <a href="#services" onClick={closeMobileMenu} className="text-xl font-medium text-slate-900 hover:text-orange-600 transition-colors">
                                Услуги
                            </a>
                            <a href="#projects" onClick={closeMobileMenu} className="text-xl font-medium text-slate-900 hover:text-orange-600 transition-colors">
                                Кейсы
                            </a>
                            <div className="pt-4 flex justify-center">
                                <Button
                                    className="w-full max-w-xs bg-orange-600 hover:bg-orange-700 text-white h-12"
                                    onClick={closeMobileMenu}
                                    asChild
                                >
                                    <a href="#contact">Связаться с нами</a>
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
