// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const PUBLIC_PATHS = [
  '/login',
  '/signup',
  '/auth',
  '/_next',
  '/favicon.ico',
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1️⃣ Allow public paths
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // 2️⃣ Read JWT from cookie
  const token = req.cookies.get('accessToken')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as { exp: number; role: string };

    // 4️⃣ (Optional) Expiration check
    if (Date.now() >= payload.exp * 1000) {
      throw new Error('Token expired');
    }

    // 5️⃣ Role‑based guards
    if (pathname.startsWith('/admin') && payload.role !== 'Admin') {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
    if (
      pathname.startsWith('/mentee-dashboard') &&
      payload.role !== 'mentee'
    ) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
    if (
      pathname.startsWith('/mentor-dashboard') &&
      payload.role !== 'mentor'
    ) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }

    // 6️⃣ All good
    return NextResponse.next();
  } catch (err) {
    const res = NextResponse.redirect(new URL('/login', req.url));
    res.cookies.delete('accessToken');
    res.cookies.delete('refreshToken');
    return res;
  }
}

export const config = {
  matcher: [
    // '/admin/:path*',
    // '/mentee-dashboard/:path*',
    // '/mentor-dashboard/:path*',
  ],
};