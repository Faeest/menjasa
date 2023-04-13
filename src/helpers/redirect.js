import React, { useEffect, useState } from "react";
import Router from "next/router";
import { useSession } from "@supabase/auth-helpers-react";

export default function RedirectHelper() {
    return;
    const session = useSession();
    const list = {
        "/auth/login": {
            session: false,
            from: ["/app"],
        },
        "/app": {
            session: true,
            from: ["/auth/login"],
        },
    };
    useEffect(() => {
        const { pathname } = Router;
        let listKeys = Object.keys(list);
        listKeys.forEach((e) => {
            let ss = list[e].session ? !!session : list[e].session == null ? true : !session;
            list[e].from.forEach((w) => {
                if (ss && pathname == w) {
                    Router.push(e);
                }
            });
        });
    });
}
export async function redir(url = "/") {
    return await Router.push(url);
}
export async function listenAuth(supabase) {
    return supabase.auth.onAuthStateChange((event, session) => {
        if(event == "SIGNED_IN" || event == "SIGNED_OUT") Router.reload();
    });
}
