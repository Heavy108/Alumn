import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request) {
  const path = request.nextUrl.pathname;
  console.log("Current path:", path);

  // Define public paths that do not require authentication
  const isPublicPath = path === '/AdminLogin' ;
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

  // Redirect if trying to access public path while authenticated
  if (isPublicPath && token) {
    console.log("Redirecting from public path to respective dashboard (token present)");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userType = decoded.type; // Assuming your token contains a `type` field
    if (userType === "admin") {
      return NextResponse.redirect(new URL('/DashBoard/Home', request.url));
    } else if (userType === "student") {
      return NextResponse.redirect(new URL('/Student/studentDash', request.url));
    }
  }

  // Redirect to login if on a protected path and no token is present
  if (!isPublicPath && !token) {
    console.log("Redirecting to login (no token on protected path)");
    return NextResponse.redirect(new URL('/AdminLogin', request.url));
  }

  // Verify token for protected routes
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
    '/DashBoard/:path*',
    '/Student/:path*',
    '/AdminLogin',
  ]
};

// Add this console log outside the middleware function to check if the file is being loaded
console.log("Middleware file loaded");
