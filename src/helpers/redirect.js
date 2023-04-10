import React, { useEffect, useState } from "react";
import Router from "next/router";
import { useSession } from "@supabase/auth-helpers-react";

export default function RedirectHelper() {
    const session = useSession();
    const list = {
        "/login": {
            session: false,
            from: ["/app"],
        },
        "/app": {
            session: true,
            from: ["/login"],
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
