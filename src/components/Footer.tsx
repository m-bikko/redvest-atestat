'use client'

import { Locale } from '@/get-dictionary'
import { ContactForm } from './ContactForm'
import { Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer({ lang, dict }: { lang: Locale, dict: any }) {
    return (
        <footer id="form" className="bg-white py-18 pb-12 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Final Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-lg w-full relative group"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 tracking-tight">
                            {dict.hero.formTitle}
                        </h2>
                        <ContactForm dict={dict} />
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col justify-center h-full gap-10 lg:pl-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                            Свяжитесь с нами
                        </h2>
                        <div className="flex flex-col gap-6 text-lg md:text-xl font-medium text-slate-600 mt-4">
                            <a href="tel:+77001010660" className="flex items-center gap-6 hover:text-primary transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors duration-300">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <span className="text-xl font-semibold tracking-wide">+7 700 101 06 60</span>
                            </a>
                            <a href="mailto:is@redvest.kz" className="flex items-center gap-6 hover:text-primary transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors duration-300">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <span className="text-xl font-semibold tracking-wide">is@redvest.kz</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-32 pt-8 border-t border-border/60 text-center text-sm md:text-base text-muted-foreground/80"
                >
                    © {new Date().getFullYear()} Redvest Industrial Safety. {lang === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}
                </motion.div>
            </div>
        </footer>
    )
}
