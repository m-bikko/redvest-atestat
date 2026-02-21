'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
    {
        title: "НПЗ Атырау — Ежегодный аудит",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "ТЭЦ-2 Алматы — Экспертиза котлов",
        image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Казцинк — Обучение персонала",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "ТШО Тенгиз — Тех. обслуживание",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
]

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Реализованные проекты</h2>
                    <p className="text-lg text-slate-600">
                        Опыт работы с крупнейшими индустриальными объектами страны
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-zinc-900 aspect-[16/9]"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-8">
                                <div className="h-1 w-12 bg-orange-500 mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                                <h3 className="text-2xl font-bold text-white tracking-wide">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
