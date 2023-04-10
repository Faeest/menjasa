import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }) {
    const [supabase] = useState(() => createBrowserSupabaseClient());

    return (
        <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </SessionContextProvider>
    );
}
export default App;
