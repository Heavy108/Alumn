import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req) {
  const token = req.cookies.get('token');
    console.lof(token)
  if (!token) {
    return NextResponse.redirect(new URL('/AdminLogin', req.url)); // Redirect to login if no token
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    return NextResponse.next(); // Proceed to the requested page if valid
  } catch (error) {
    return NextResponse.redirect(new URL('/AdminLogin', req.url)); // Redirect to login if invalid
  }
}

export const config = {
  matcher: ['/Dashboard/Home'], // Protect all routes under /Dashboard
};
