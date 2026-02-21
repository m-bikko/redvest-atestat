'use client'

import { Locale } from '@/get-dictionary'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'framer-motion'

export default function FAQ({ lang, dict }: { lang: Locale, dict: any }) {
    const faqs = [
        { q: dict.faq.q1, a: dict.faq.a1 },
        { q: dict.faq.q2, a: dict.faq.a2 },
    ]

    return (
        <section id="faq" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-8 max-w-3xl relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-foreground tracking-tight"
                >
                    {dict.faq.title}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7 }}
                    className="bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-black/5 border border-border"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b-border/60 pb-2 mb-2">
                                <AccordionTrigger className="text-left text-lg md:text-xl font-bold hover:text-primary transition-colors hover:no-underline data-[state=open]:text-primary">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pt-2">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
