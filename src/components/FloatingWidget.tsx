'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactForm } from './ContactForm'
import { AnimatePresence, motion } from 'framer-motion'

export default function FloatingWidget({ dict }: { dict: any }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-24 right-6 w-[350px] bg-white rounded-2xl shadow-2xl p-6 border border-border/50 z-50 origin-bottom-right"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg">{dict.hero.formTitle}</h3>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                <X className="w-5 h-5" />
                            </Button>
                        </div>
                        <ContactForm dict={dict} />
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl bg-primary hover:bg-primary/90 text-primary-foreground z-50 flex items-center justify-center p-0"
            >
                {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
            </Button>
        </>
    )
}
