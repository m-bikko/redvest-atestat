import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['ru', 'en']
let defaultLocale = 'ru'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
