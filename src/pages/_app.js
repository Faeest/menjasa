import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorBoundary from "@/components/ErrorBoundary";
import { extendTheme } from "@chakra-ui/react";

function App({ Component, pageProps }) {
    const [supabase] = useState(() => createBrowserSupabaseClient());

    const theme = extendTheme({
        colors: {
            palette: {
                lime: "#1abc9c",
                blue: "#7fd8cc",
                dark: "#1f2d3d",
                black: "#2c3e50",
                light: "#e9ecef",
                white: "#f8f9fa",
            },
        },
    });
    return (
        <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
            <ChakraProvider theme={theme}>
                <ErrorBoundary>
                    <Component {...pageProps} />
                </ErrorBoundary>
            </ChakraProvider>
        </SessionContextProvider>
    );
}
export default App;
