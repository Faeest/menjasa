import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request = new NextRequest()) {
    return NextResponse.next();

    let session = request.cookies.get("supabase-auth-token") ? true : false;
    const list = {
        "/auth/login": {
            session: false,
            from: ["/app"],
        },
        "/app": {
            session: true,
            from: ["/auth/login","/auth/register","/auth"],
        },
    };
    const pathname = new URL(request.url).pathname;
    let listKeys = Object.keys(list);
    let newurl = "";
    listKeys.forEach((e) => {
        let ss = list[e].session ? session : list[e].session == null ? true : !session;
        list[e].from.forEach((w) => {
            if (ss && pathname == w) {
                let { origin } = request.nextUrl;
                return (newurl = origin + e)
            }
        });
    });
    if(newurl != "") {
        return NextResponse.redirect(newurl);
    }
    return NextResponse.next();
}
