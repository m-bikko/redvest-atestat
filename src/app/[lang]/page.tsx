import { getDictionary, Locale } from '@/get-dictionary'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'
import FloatingWidget from '@/components/FloatingWidget'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = (lang === 'ru' || lang === 'en') ? (lang as Locale) : 'ru'
  const dict = await getDictionary(locale)

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header lang={locale} dict={dict} />
      <main>
        <Hero lang={locale} dict={dict} />
        <Process lang={locale} dict={dict} />
        <FAQ lang={locale} dict={dict} />
        <Partners lang={locale} dict={dict} />
      </main>
      <Footer lang={locale} dict={dict} />
      <FloatingWidget dict={dict} />
    </div>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'ru' }, { lang: 'en' }]
}
