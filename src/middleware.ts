import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { RateLimiterMemory } from 'rate-limiter-flexible'

const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 requests
  duration: 60, // per 60 seconds
})

// List of public routes that don't require authentication
const PUBLIC_ROUTES = ['/', '/login', '/signup', '/auth/reset-password']

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Skip authentication check for public routes
  if (PUBLIC_ROUTES.includes(req.nextUrl.pathname)) {
    return res
  }

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Redirect to login if no session for protected routes
  if (!session) {
    const url = new URL('/login', req.url)
    url.searchParams.set('redirectTo', req.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  try {
    await rateLimiter.consume(req.ip ?? '')
    return res
  } catch (rateLimiterRes) {
    return new NextResponse('Too Many Requests', { status: 429 })
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
} 