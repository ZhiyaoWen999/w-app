import { NextRequest, NextResponse } from 'next/server';
import { auth } from "@/lib/auth";

export { auth as default } from "@/lib/auth";

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export async function middleware(req: NextRequest) {
  try {
    // Add debugging information
    console.log('Request URL:', req.url);
    console.log('Request Headers:', req.headers);

    // Your middleware logic here
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}