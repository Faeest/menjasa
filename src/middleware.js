import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request = new NextResponse()) {
    return NextResponse.next();
    // return NextResponse.redirect(new URL("/about-2", request.url));
}
