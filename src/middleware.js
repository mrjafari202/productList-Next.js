import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token'); // دریافت کوکی از درخواست
  const url = req.nextUrl.clone();

  if (!token && url.pathname !== '/login') {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico).*)'], // مسیریابی برای تمام صفحات
};
