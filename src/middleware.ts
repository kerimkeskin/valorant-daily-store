import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasToken = req.cookies.has('user');

  if (!hasToken) return NextResponse.redirect(new URL('/login', req.url));

  if (pathname == '/') {
    return NextResponse.redirect(new URL('/daily-store', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/daily-store', '/reminder'],
};
