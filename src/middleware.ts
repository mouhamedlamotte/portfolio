import { NextRequest, NextResponse, userAgent } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { createI18nMiddleware } from 'next-international/middleware';

// I18n Middleware Configuration
const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
});

// Middleware
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // const user_agent = userAgent(request);
  const allowedHosts =
    process.env.NEXT_PUBLIC_ALLOWED_HOSTS?.split(',').map((item) => item.trim()) ?? [];

  // Bypass for system paths
  if (pathname.startsWith('/_next') || pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // Retrieve user token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Paths requiring authentication
  const adminPaths = ['/admin', '/fr/admin', '/en/admin'];
  if (adminPaths.some((path) => pathname.startsWith(path)) && !token) {
    return NextResponse.redirect(
      new URL(`/auth/login?next=${request.nextUrl.pathname}`, request.url)
    );
  }

  // API Host validation
  if (pathname.startsWith('/api') && !allowedHosts.includes(request.headers.get('host') ?? '')) {
    return NextResponse.json(
      { message: `Unauthorized host: ${request.headers.get('host')}` },
      { status: 403 }
    );
  }

  // Track visits for specific paths
  // const portfolioPaths = [
  //   '/portfolio',
  //   '/fr/portfolio',
  //   '/en/portfolio',
  //   '/',
  //   '/fr',
  //   '/en',
  // ];
  // if (
  //   portfolioPaths.some((path) => pathname.startsWith(path)) &&
  //   !token &&
  //   !searchParams.get('_rsc')
  // ) {
  //   try {
  //     await AxiosInstance.post('/visit', {
  //       url: pathname ?? 'unknown',
  //       deviceType: user_agent.device.type ?? 'unknown',
  //       os: user_agent.os.name ?? 'unknown',
  //       browser: user_agent.browser.name ?? 'unknown',
  //       referrer: request.referrer ?? 'unknown',
  //       ipAddress: request.headers.get('x-forwarded-for') ?? 'unknown',
  //       isBot: user_agent.isBot,
  //       source: searchParams.get('source') ?? 'unknown',
  //     });
  //   } catch (error) {
  //     console.error('Error tracking visit:', error);
  //   }
  // }

  // Add header for message admin paths
  const messageAdminPaths = [
    '/admin/messages',
    '/fr/admin/messages',
    '/en/admin/messages',
  ];
  if (messageAdminPaths.some((path) => pathname.startsWith(path))) {
    const headers = new Headers(request.headers);
    headers.set('x-current-path', request.nextUrl.pathname + request.nextUrl.search);
    return NextResponse.next({ headers });
  }

  // Default I18n middleware
  return I18nMiddleware(request);
}

// Configuration
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
