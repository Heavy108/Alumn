import { NextResponse } from 'next/server';

export async function POST() {
  // Clear the token cookie by setting it with an expired date
  const response = NextResponse.json({ message: "Logged out successfully" });
  
  // Set the cookie to expire immediately, clearing the JWT token
  response.cookies.set('token', '', {
    httpOnly: true,
    expires: new Date(0), // Expire the cookie immediately
    path: '/',
  });

  return response;
}
