import { NextRequest, NextResponse, userAgent } from 'next/server'
 
export async function  middleware(request: NextRequest) {
  const user_agent = userAgent(request)
  if (request.url === 'http://localhost:3000' || request.url.includes('/portfolio')) {
        await fetch('http://localhost:3000/api/visit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                visitedPage: request.url,
                deviceType: user_agent.device.type ?? "",
                os: user_agent.os.name ?? "",
                browser: user_agent.browser.name ?? "",
                referrer: request.referrer ?? "",
                ipAddress: request.headers.get('x-forwarded-for') ?? "",
                isBot : user_agent.isBot
            })
        })
  }

  return NextResponse.next()
}