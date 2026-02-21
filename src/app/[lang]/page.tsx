import AtestatHeader from '@/components/atestat/AtestatHeader'
import HeroSection from '@/components/atestat/HeroSection'
import AboutSection from '@/components/atestat/AboutSection'
import AtestatPartners from '@/components/atestat/AtestatPartners'
import ServicesSection from '@/components/atestat/ServicesSection'
import ProjectsSection from '@/components/atestat/ProjectsSection'
import SocialProofSection from '@/components/atestat/SocialProofSection'
import AtestatFAQ from '@/components/atestat/AtestatFAQ'
import QuizForm from '@/components/atestat/QuizForm'
import Footer from '@/components/Footer' // we can reuse the generic footer
import { getDictionary, Locale } from '@/get-dictionary'

export default async function AtestatPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const locale = (lang === 'ru' || lang === 'en') ? (lang as Locale) : 'ru'
    const dict = await getDictionary(locale)

    return (
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)] selection:bg-orange-500/30">
            <AtestatHeader lang={locale} />

            <main>
                <HeroSection />
                <AtestatPartners />
                <AboutSection />
                <ServicesSection />
                <ProjectsSection />
                <SocialProofSection />
                <AtestatFAQ />
                <QuizForm />
            </main>

            <Footer lang={locale} dict={dict} />
        </div>
    )
}

export async function generateStaticParams() {
    return [{ lang: 'ru' }, { lang: 'en' }]
}
