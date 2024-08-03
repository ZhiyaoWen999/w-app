import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // Example middleware logic
  console.log('Request URL:', req.url);

  // Continue to the next middleware or route handler
  return NextResponse.next();
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};