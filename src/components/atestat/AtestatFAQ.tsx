'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const faqs = [
    {
        q: "Какой срок действия аттестата на право проведения работ в области промышленной безопасности?",
        a: "Аттестат по промышленной безопасности выдается на 5 лет."
    },
    {
        q: "Что такое Аттестат на право проведения работ в области промышленной безопасности?",
        a: "Это документ, выдаваемый уполномоченным органом в области промышленной безопасности, удостоверяющий право юридического лица выполнять работы в области промышленной безопасности."
    },
    {
        q: "Кто выдает Аттестат на право проведения работ в области промышленной безопасности?",
        a: "Комитет индустриального развития и промышленной безопасности Министерства по инвестициям и развитию Республики Казахстан."
    },
    {
        q: "На какие виды работ выдается Аттестат?",
        a: (
            <ul className="list-disc pl-5 space-y-1">
                <li>проведения экспертизы промышленной безопасности;</li>
                <li>подготовки, переподготовки специалистов, работников в области промышленной безопасности</li>
                <li>проведения технического обслуживания газопотребляющих систем.</li>
            </ul>
        )
    }
]

export default function AtestatFAQ() {
    // Default open the first item to showcase the animation
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-24 bg-[#F2F2F2] flex justify-center w-full">
            <div className="w-full max-w-4xl bg-white flex flex-col shadow-sm">
                {/* Title Element */}
                <div className="flex justify-between items-center p-6 md:p-8 border-b border-gray-200">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                        Часто задаваемые вопросы
                    </h2>
                    <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full">
                        <X className="w-5 h-5 text-slate-400" />
                    </div>
                </div>

                {/* FAQ Items */}
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="border-b border-gray-200 last:border-b-0 overflow-hidden">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center p-6 md:p-8 text-left group transition-colors focus:outline-none"
                            >
                                <span className="text-base md:text-lg font-bold text-slate-900 pr-8">
                                    {faq.q}
                                </span>
                                <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-slate-100 transition-colors">
                                    <X
                                        className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-45'}`}
                                    />
                                </div>
                            </button>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-slate-600 font-light text-sm md:text-base leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
