'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AtestatPartners() {
    // We renamed the images to partner_1.png through partner_11.png
    const partners = Array.from({ length: 11 }, (_, i) => ({
        id: i + 1,
        src: `/partner_${i + 1}.png`,
        alt: `Партнер ${i + 1}`
    }))

    return (
        <section className="py-18 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Нам доверяют</h2>
                    <p className="text-lg text-slate-600">
                        Ведущие компании Казахстана выбирают нас для обеспечения своей безопасности
                    </p>
                </div>

                <div className="relative flex overflow-hidden group border-y border-slate-50 py-8 bg-gradient-to-r from-white via-transparent to-white">
                    {/* Left and Right Fade overlays for smoother entry/exit */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 sm:w-1/4 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 sm:w-1/4 bg-gradient-to-l from-white to-transparent z-10"></div>

                    {/* Marquee Track 1 */}
                    <div className="flex shrink-0 animate-marquee items-center justify-around gap-12 sm:gap-20 min-w-full pr-12 sm:pr-20">
                        {partners.map((partner) => (
                            <div
                                key={`m1-${partner.id}`}
                                className="relative w-32 h-16 sm:w-40 sm:h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105 shrink-0"
                            >
                                <Image
                                    src={partner.src}
                                    alt={partner.alt}
                                    fill
                                    sizes="(max-width: 768px) 128px, 160px"
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Marquee Track 2 (Duplicate for seamless looping) */}
                    <div className="flex shrink-0 animate-marquee items-center justify-around gap-12 sm:gap-20 min-w-full pr-12 sm:pr-20">
                        {partners.map((partner) => (
                            <div
                                key={`m2-${partner.id}`}
                                className="relative w-32 h-16 sm:w-40 sm:h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105 shrink-0"
                            >
                                <Image
                                    src={partner.src}
                                    alt={partner.alt}
                                    fill
                                    sizes="(max-width: 768px) 128px, 160px"
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
