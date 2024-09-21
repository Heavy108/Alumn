import { NextResponse } from 'next/server';

import jwt from 'jsonwebtoken';

export function middleware(request) {
  console.log("Middleware executed");
  console.log("Request URL:", request.url);
  console.log("Request method:", request.method);

  const path = request.nextUrl.pathname;
  console.log("Current path:", path);

  const isPublicPath = path === '/AdminLogin';
  console.log("Is public path:", isPublicPath);

  let token;
  try {
    token = request.cookies.get('token')?.value;
    console.log("Token found:", !!token);
    if (token) {
      console.log("Token value (first 10 chars):", token.substring(0, 10) + "...");
    }
  } catch (error) {
    console.error("Error accessing token:", error);
  }

  if (isPublicPath && token) {
    console.log("Redirecting from public path to dashboard (token present)");
    return NextResponse.redirect(new URL('/DashBoard/Home', request.url));
  }

  if (!isPublicPath && !token) {
    console.log("Redirecting to login (no token on protected path)");
    return NextResponse.redirect(new URL('/AdminLogin', request.url));
  }

  if (!isPublicPath && token) {
    try {
      console.log("Attempting to verify token");
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Token verified successfully. Decoded payload:", decoded);
      console.log("Proceeding to protected route");
      return NextResponse.next();
    } catch (error) {
      console.error("Token verification failed:", error.message);
      console.log("Redirecting to login due to invalid token");
      return NextResponse.redirect(new URL('/AdminLogin', request.url));
    }
  }

  console.log("Middleware completed without redirection");
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/AdminLogin',
    '/DashBoard',
    '/DashBoard/:path*',
  ]
};

// Add this console log outside the middleware function to check if the file is being loaded
console.log("Middleware file loaded");