'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function LanguageSwitcher({ currentLang, isDark = false }: { currentLang: string, isDark?: boolean }) {
    const router = useRouter()
    const pathname = usePathname()

    const toggleLanguage = () => {
        const newLang = currentLang === 'ru' ? 'en' : 'ru'
        let newPath = pathname.replace(`/${currentLang}`, `/${newLang}`)

        // Fallback if pathname logic fails
        if (!newPath.startsWith(`/${newLang}`)) {
            newPath = `/${newLang}`
        }

        router.push(newPath)
    }

    return (
        <Button variant="ghost" size="sm" onClick={toggleLanguage} className={`font-semibold text-sm cursor-pointer ${isDark ? 'hover:bg-white/20 text-white' : 'hover:bg-muted text-foreground'}`}>
            {currentLang === 'ru' ? 'EN' : 'RU'}
        </Button>
    )
}
