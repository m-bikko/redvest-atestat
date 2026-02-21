'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const stats = [
    { value: "12", label: "лет опыта" },
    { value: "900+", label: "выданных аттестатов" },
    { value: "20", label: "экспертов в штате" },
    { value: "200+", label: "довольных компаний" }
]

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                            О Redvest
                        </h2>
                        <div className="h-1 w-20 bg-orange-600 mb-8 blur-[1px]"></div>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            Мы - команда профессионалов, специализирующаяся на обеспечении промышленной безопасности. Наша миссия заключается в защите жизни и здоровья работников, а также сохранности производственных активов предприятий по всему Казахстану.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Внедряя передовые стандарты и современные технологии аудита, мы помогаем нашим клиентам снизить производственные риски на <span className="font-semibold text-slate-900 bg-orange-100 px-2 py-0.5 rounded">10% - 25%</span> в первый же год сотрудничества.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-orange-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 pointer-events-none"></div>
                        <h3 className="text-2xl font-semibold mb-4 relative z-10 text-slate-800">Масштаб и Прозрачность</h3>
                        <p className="text-slate-600 relative z-10">
                            Уход от устаревших подходов: мы предлагаем прозрачное ценообразование, быстрые сроки и гарантию прохождения государственной экспертизы. Ваш аттестат - наша ответственность!
                        </p>
                    </motion.div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-8 text-center border-none shadow-sm bg-slate-50 hover:bg-white hover:shadow-md transition-all duration-300 group">
                                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
