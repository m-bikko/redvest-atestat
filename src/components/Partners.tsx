'use client'

import { Locale } from '@/get-dictionary'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Partners({ lang, dict }: { lang: Locale, dict: any }) {
    const partners = ['ZMS', 'Nabors', 'TCO', 'Aqua Drill', 'AGS', 'NCOC']

    return (
        <section className="py-18 bg-muted/20 border-t border-b border-border/50 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-foreground/80 tracking-tight"
                >
                    {dict.partners.title}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap justify-center items-center gap-10 md:gap-20 mb-20"
                >
                    {partners.map((partner, i) => (
                        <motion.div
                            key={partner}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            className="text-2xl md:text-3xl font-black tracking-widest text-foreground/40 hover:text-foreground transition-all duration-300 hover:scale-110 cursor-default"
                        >
                            {partner}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link href={`/${lang}#form`}>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 h-16 rounded-full shadow-2xl shadow-primary/30 transition-all hover:-translate-y-1 hover:shadow-primary/40">
                            {dict.partners.applyBtn}
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
