'use client'

import { Locale } from '@/get-dictionary'
import { ContactForm } from './ContactForm'
import { Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer({ lang, dict }: { lang: Locale, dict: any }) {
    return (
        <footer id="form" className="bg-white py-24 pb-12 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Final Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-2xl shadow-primary/5 max-w-lg w-full relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                        <h2 className="text-3xl font-bold mb-8 text-foreground tracking-tight">
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
                        <div className="flex flex-col gap-8 text-lg md:text-xl font-medium text-muted-foreground">
                            <a href="tel:+77000000000" className="flex items-center gap-6 hover:text-primary transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <Phone className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="text-2xl font-semibold tracking-wide">+7 (700) 000-00-00</span>
                            </a>
                            <a href="mailto:info@redvest.kz" className="flex items-center gap-6 hover:text-primary transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <Mail className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="text-2xl font-semibold tracking-wide">info@redvest.kz</span>
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
