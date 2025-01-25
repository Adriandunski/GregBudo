import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    const origin = request.headers.get('origin') ?? '';
    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", origin);

    return response;
}

export const config = {
    matcher: '/:path*',
}