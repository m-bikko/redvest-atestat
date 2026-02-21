'use client'

import { motion } from 'framer-motion'
import { Locale } from '@/get-dictionary'

export default function Process({ lang, dict }: { lang: Locale, dict: any }) {
    const steps = [
        { num: 1, text: dict.process.step1 },
        { num: 2, text: dict.process.step2 },
        { num: 3, text: dict.process.step3 },
        { num: 4, text: dict.process.step4 },
        { num: 5, text: dict.process.step5 },
    ]

    const containerData = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemData = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section id="process" className="py-24 bg-muted/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-foreground tracking-tight"
                >
                    {dict.process.title}
                </motion.h2>

                <motion.div
                    variants={containerData}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
                >
                    {steps.map((step) => (
                        <motion.div
                            variants={itemData}
                            key={step.num}
                            className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl hover:bg-white transition-all duration-300 group cursor-default"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 shadow-md text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 rotate-3 group-hover:-rotate-3 group-hover:scale-110 transition-transform duration-300">
                                {step.num}
                            </div>
                            <p className="font-bold text-lg text-foreground/90">
                                {step.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
