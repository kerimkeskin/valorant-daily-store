import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname == '/') {
    return NextResponse.redirect(new URL('/daily-store', req.url));
  }
  return NextResponse.next();
}
