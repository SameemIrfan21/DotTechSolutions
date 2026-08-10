import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch("https://hits.sh/dottechsolutions.com.svg?label=VISITORS&color=3b82f6", {
      cache: 'no-store',
      headers: {
        'Accept': 'image/svg+xml'
      }
    });
    
    if (!res.ok) throw new Error("Failed to fetch badge");
    
    const text = await res.text();
    
    return new NextResponse(text, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  } catch (error) {
    return new NextResponse("Error fetching badge", { status: 500 });
  }
}
