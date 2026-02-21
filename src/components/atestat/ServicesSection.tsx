'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Zap, Settings, Clock } from 'lucide-react'

const services = [
    {
        title: "Экспертиза безопасности",
        description: "Проведение комплексного аудита и экспертизы промышленной безопасности на опасных производственных объектах с выдачей заключения.",
        icon: Zap,
        color: "text-amber-500",
        bg: "bg-amber-100"
    },
    {
        title: "Подготовка специалистов",
        description: "Обучение и повышение квалификации персонала по вопросам охраны труда и промышленной безопасности с выдачей удостоверений.",
        icon: Settings,
        color: "text-blue-500",
        bg: "bg-blue-100"
    },
    {
        title: "Техническое обслуживание",
        description: "Регулярный осмотр, диагностика и обслуживание производственного оборудования для предотвращения аварийных ситуаций.",
        icon: Clock,
        color: "text-green-500",
        bg: "bg-green-100"
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15
        }
    }
}

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Наши услуги</h2>
                    <p className="text-lg text-slate-600">
                        Комплексные решения для обеспечения безопасности на вашем предприятии
                    </p>
                </div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full p-8 border-none bg-[#faf9f6] shadow-sm hover:shadow-md transition-all duration-300">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6`}
                                >
                                    <service.icon className={`w-7 h-7 ${service.color}`} />
                                </motion.div>
                                <h3 className="text-2xl font-semibold mb-4 text-slate-800">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
