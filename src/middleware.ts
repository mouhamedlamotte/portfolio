import { NextRequest, NextResponse, userAgent } from 'next/server';
import { AxiosInstance } from './lib/axios';
import { getToken } from 'next-auth/jwt';
import { kdebug } from './lib/kdebug';

export async function middleware(request : NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const user_agent = userAgent(request);
  const allowedHosts = process.env.NEXT_PUBLIC_ALLOWED_HOSTS?.split(',').map(item => item.trim()) ?? [];
  

  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api/auth')
  ) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (pathname.startsWith('/admin') && !token) {
    return NextResponse.redirect(
      new URL(`/auth/login?next=${request.nextUrl.pathname}`, request.url)
    );
  }

  if (pathname.startsWith('/api') && !allowedHosts.includes(request.headers.get('host') ?? '' )) {
    return NextResponse.json({ message: 'unauthorized host' }, { status: 403 });
  }

  // const isDirectVisit = !request.referrer 

  if ((pathname.startsWith('/portfolio') || pathname === '/' )  && !token && !searchParams.get("_rsc")) {
    try {
      await AxiosInstance.post('/visit', {
        url : pathname ?? 'unknown',
        deviceType: user_agent.device.type ?? 'unknown',
        os: user_agent.os.name ?? 'unknown',
        browser: user_agent.browser.name ?? 'unknown',
        referrer: request.referrer ?? 'unknown',
        ipAddress: request.headers.get('x-forwarded-for') ?? 'unknown',
        isBot: user_agent.isBot,
      });
      
    } catch (error) {
      // kdebug("une erreur est survenue", error);
    }
  }

  if (pathname.startsWith('/admin/messages')) {
    const headers = new Headers(request.headers);
    headers.set('x-current-path', request.nextUrl.pathname + request.nextUrl.search);
    return NextResponse.next({ headers });
  }

  return NextResponse.next();
}