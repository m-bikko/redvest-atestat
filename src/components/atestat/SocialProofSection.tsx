'use client'

import { motion } from 'framer-motion'
import { Quote, ArrowRight, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
    {
        quote: "Благодаря профессионализму команды Redvest мы успешно прошли все проверки и получили необходимые аттестаты в рекордные сроки. Это позволило нам не прерывать производственный процесс ни на день.",
        author: "Арман Сериков",
        role: "Главный инженер, НПЗ",
        avatar: "А"
    },
    {
        quote: "Отличный подход к делу. Все этапы были максимально прозрачными, а специалисты компании всегда были на связи и готовы помочь с любыми вопросами по технике безопасности.",
        author: "Елена Смирнова",
        role: "Директор по производству",
        avatar: "Е"
    }
]

export default function SocialProofSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    return (
        <section className="py-32 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-8">
                <div className="relative max-w-5xl mx-auto">
                    <Quote className="absolute -top-12 -left-8 md:-left-16 w-32 h-32 text-slate-800/50 rotate-180" />

                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >
                        <blockquote className="text-3xl md:text-5xl font-medium text-white leading-tight mb-12">
                            "{testimonials[currentIndex].quote}"
                        </blockquote>

                        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-t border-slate-800 pt-8 gap-8 sm:gap-4">
                            <div className="flex items-center gap-4 sm:gap-6">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-800 flex items-center justify-center text-xl sm:text-2xl text-slate-400 font-bold shrink-0">
                                    {testimonials[currentIndex].avatar}
                                </div>
                                <div>
                                    <div className="text-lg sm:text-xl font-bold text-white leading-tight mb-1">{testimonials[currentIndex].author}</div>
                                    <div className="text-slate-400 text-sm sm:text-base leading-tight">{testimonials[currentIndex].role}</div>
                                </div>
                            </div>

                            <div className="flex gap-4 self-start sm:self-auto">
                                <button
                                    onClick={prev}
                                    className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-slate-200 transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
