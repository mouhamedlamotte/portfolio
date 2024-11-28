import { NextRequest, NextResponse, userAgent } from 'next/server'
import { AxiosInstance } from './lib/axios';
 
export async function  middleware(request: NextRequest) {
  const user_agent = userAgent(request)
  const pathname = request.nextUrl.pathname

  
  
  const headers = new Headers(request.headers);
  
  if (pathname.includes("/admin/messages")) {
      headers.set("x-current-path", request.nextUrl.pathname + request.nextUrl.search);
  }

  if (pathname.includes("/portfolio") && !pathname.includes("/_next/") || pathname === "/") { 
        await AxiosInstance.post("/visit", {
            visitedPage: pathname ?? "unknown",
            deviceType: user_agent.device.type ?? "unknown",
            os: user_agent.os.name ?? "unknown",
            browser: user_agent.browser.name ?? "unknown",
            referrer: request.referrer ?? "unknown",
            ipAddress: request.headers.get('x-forwarded-for') ?? "unknown",
            isBot : user_agent.isBot
        })
  }

  return NextResponse.next({headers})
}