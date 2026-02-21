'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const questions = [
    {
        id: 'type',
        title: 'Тип объекта',
        options: ['Завод/Фабрика', 'ТЭЦ или котельная', 'Склад ГСМ', 'Другое']
    },
    {
        id: 'employees',
        title: 'Количество сотрудников',
        options: ['до 50 человек', '50-200 человек', 'более 200 человек']
    },
    {
        id: 'urgency',
        title: 'Сроки проведения',
        options: ['Срочно (до 1 месяца)', 'Планово (1-3 месяца)', 'Просто узнать стоимость']
    }
]

export default function QuizForm() {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [formData, setFormData] = useState({ name: '', phone: '', company: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleOptionSelect = (questionId: string, option: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: option }))
        setTimeout(() => {
            if (step < questions.length) {
                setStep(step + 1)
            }
        }, 400)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const res = await fetch('/api/telegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    quizAnswers: answers
                })
            })
            if (res.ok) {
                setIsSuccess(true)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Оставить заявку</h2>
                    <p className="text-lg text-slate-600">
                        Ответьте на несколько вопросов, чтобы мы смогли рассчитать стоимость и подготовить индивидуальное предложение
                    </p>
                </div>

                <div className="max-w-3xl mx-auto relative">
                    <Card className="p-8 md:p-12 shadow-xl border-slate-100 bg-white min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                        {/* Progress bar */}
                        {!isSuccess && (
                            <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
                                <motion.div
                                    className="h-full bg-orange-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(step / (questions.length)) * 100}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        )}

                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка успешно отправлена!</h3>
                                    <p className="text-slate-600">Наш специалист свяжется с вами в ближайшее время.</p>
                                </motion.div>
                            ) : step < questions.length ? (
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    <div className="text-sm font-medium text-orange-600 mb-2">Шаг {step + 1} из {questions.length}</div>
                                    <h3 className="text-2xl font-bold text-slate-900">{questions[step].title}</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {questions[step].options.map((option, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleOptionSelect(questions[step].id, option)}
                                                className={`text-left p-6 rounded-xl border-2 transition-all ${answers[questions[step].id] === option
                                                        ? 'border-orange-500 bg-orange-50 text-orange-900'
                                                        : 'border-slate-100 hover:border-orange-200 hover:bg-slate-50'
                                                    }`}
                                            >
                                                <span className="font-medium">{option}</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Последний шаг</h3>
                                    <p className="text-slate-600 mb-8">Оставьте свои контакты, и мы перезвоним с готовым расчетом</p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Ваше имя</Label>
                                                <Input
                                                    id="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="Иван Иванов"
                                                    className="h-12"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Контактный телефон</Label>
                                                <Input
                                                    id="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    placeholder="+7 (700) 000-00-00"
                                                    className="h-12"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="company">Название компании</Label>
                                            <Input
                                                id="company"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                placeholder="ТОО Пример"
                                                className="h-12"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center pt-4">
                                            <Button type="button" variant="ghost" onClick={() => setStep(step - 1)}>
                                                Назад
                                            </Button>
                                            <Button type="submit" size="lg" disabled={isSubmitting} className="bg-orange-600 hover:bg-orange-700 h-12 px-8">
                                                {isSubmitting ? 'Отправка...' : 'Получить расчет'}
                                            </Button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Card>
                </div>
            </div>
        </section>
    )
}
