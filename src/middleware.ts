import { NextRequest, NextResponse, userAgent } from 'next/server'
 
export async function  middleware(request: NextRequest) {
  const user_agent = userAgent(request)
  const pathname = request.nextUrl.pathname
  const trackPaths = ['/portfolio', '/devis', "/"]
  
  
  const headers = new Headers(request.headers);
  
  if (pathname.includes("/admin/messages")) {
      headers.set("x-current-path", request.nextUrl.pathname + request.nextUrl.search);
  }
  
  if (trackPaths.includes(pathname)) {
        await fetch('http://localhost:3000/api/visit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                visitedPage: pathname ?? "",
                deviceType: user_agent.device.type ?? "",
                os: user_agent.os.name ?? "",
                browser: user_agent.browser.name ?? "",
                referrer: request.referrer ?? "",
                ipAddress: request.headers.get('x-forwarded-for') ?? "",
                isBot : user_agent.isBot
            })
        })
  }

  return NextResponse.next({headers})
}