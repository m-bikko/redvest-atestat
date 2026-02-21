'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import InteractiveDots from './InteractiveDots'

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50">
            {/* Interactive dot grid background */}
            <div className="absolute inset-0 z-0 opacity-60">
                <InteractiveDots />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent z-[1] pointer-events-none"></div>

            {/* Radial gradient purely for a soft highlight */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-[1] pointer-events-none"></div>

            <div className="container relative z-10 px-4 md:px-8 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
                            Smart Solutions<br />
                            <span className="text-slate-600">For Industrial Safety</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto"
                    >
                        Аттестат под ключ за <span className="text-orange-600 font-bold">500 000 ₸</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto h-14 px-8 text-lg shadow-lg shadow-orange-600/20" asChild>
                            <Link href="#contact">Получить консультацию</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg" asChild>
                            <Link href="#services">Подробнее об услугах</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
