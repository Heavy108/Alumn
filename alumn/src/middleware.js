import { NextResponse } from 'next/server';

// Helper function to verify JWT using Web Crypto API
async function verifyJWT(token, secret) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify']
  );
  const [header, payload, signature] = token.split('.');

  const data = `${header}.${payload}`;
  const expectedSignature = atob(signature)
    .split('')
    .map((c) => c.charCodeAt(0));
  
  const isValid = await crypto.subtle.verify(
    'HMAC',
    key,
    new Uint8Array(expectedSignature),
    new TextEncoder().encode(data)
  );

  if (!isValid) throw new Error('Invalid token signature');
  return JSON.parse(atob(payload));
}

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  console.log("Current path:", path);

  // Public path (login)
  const isPublicPath = path === '/AdminLogin';
  console.log("Is public path:", isPublicPath);

  let token;
  try {
    token = request.cookies.get('token')?.value;
    console.log("Token found:", !!token);
  } catch (error) {
    console.error("Error accessing token:", error);
  }

  // If user is authenticated and tries to access the login page, redirect to respective dashboard
  if (isPublicPath && token) {
    try {
      const decoded = await verifyJWT(token, process.env.JWT_SECRET);
      const userType = decoded.type;

      console.log("Decoded User Type:", userType); // Debugging line
      if (userType === "admin") {
        return NextResponse.redirect(new URL('/DashBoard/Home', request.url));
      } else if (userType === "student") {
        return NextResponse.redirect(new URL('/Student/studentDash', request.url));
      }
    } catch (error) {
      console.error("Error verifying token on public path:", error);
    }
  }

  // If user is not authenticated and tries to access a protected page, redirect to login
  if (!isPublicPath && !token) {
    console.log("Redirecting to login (no token on protected path)");
    return NextResponse.redirect(new URL('/AdminLogin', request.url));
  }

  // Role-based access control for authenticated users
  if (!isPublicPath && token) {
    try {
      const decoded = await verifyJWT(token, process.env.JWT_SECRET);
      console.log(token)
      const userType = decoded.type;

      console.log("Decoded User Type for Role-based Check:", userType); // Debugging line
      // Admin trying to access student paths
      if (userType === 'admin' && path.startsWith('/Student')) {
        console.log("Admin accessing student path, redirecting...");
        return NextResponse.redirect(new URL('/DashBoard/Home', request.url)); 
      }

      // Student trying to access admin paths
      if (userType === 'student' && path.startsWith('/DashBoard')) {
        console.log("Student accessing admin path, redirecting...");
        return NextResponse.redirect(new URL('/Student/studentDash', request.url)); 
      }

      console.log("Access granted for:", userType, "to path:", path);
      return NextResponse.next();
    } catch (error) {
      console.error("Token verification failed:", error.message);
      return NextResponse.redirect(new URL('/AdminLogin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/DashBoard/:path*',   // Admin dashboard paths
    '/Student/:path*',     // Student dashboard paths
    '/AdminLogin',         // Public login path
  ],
};
