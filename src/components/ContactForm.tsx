'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { sendToTelegram } from '@/app/actions'
import { useState } from 'react'
import { toast } from 'sonner'

export function ContactForm({ dict, isDark = false }: { dict: any, isDark?: boolean }) {
    const [isPending, setIsPending] = useState(false)

    const formSchema = z.object({
        name: z.string().min(2, {
            message: dict.formMessages?.error || "Invalid name",
        }),
        email: z.string().email({
            message: dict.formMessages?.error || "Invalid email",
        }),
        phone: z.string().regex(/^\+?[\s\-\(\)0-9]{10,16}$/, {
            message: dict.formMessages?.invalidPhone || "Invalid phone number",
        }),
    })

    // @ts-ignore
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsPending(true)
        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('email', values.email)
        formData.append('phone', values.phone)

        const result = await sendToTelegram(formData)
        setIsPending(false)

        if (result.success) {
            toast.success(dict.formMessages.success)
            form.reset()
        } else {
            toast.error(dict.formMessages.error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder={dict.hero.namePlaceholder} {...field} className={`h-12 ${isDark ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50' : 'bg-white'}`} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="email" placeholder={dict.hero.emailPlaceholder} {...field} className={`h-12 ${isDark ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50' : 'bg-white'}`} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="tel" placeholder={dict.hero.phonePlaceholder} {...field} className={`h-12 ${isDark ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50' : 'bg-white'}`} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    disabled={isPending}
                    className={`w-full h-12 font-semibold text-base transition-all ${isDark ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25' : 'bg-primary hover:bg-primary/90 text-primary-foreground'}`}
                >
                    {isPending ? "..." : dict.hero.submitBtn}
                </Button>
            </form>
        </Form>
    )
}
