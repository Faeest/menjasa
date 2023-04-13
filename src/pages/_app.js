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
            teal: {
                100: "#99e2b4",
                200: "#88d4ab",
                300: "#78c6a3",
                400: "#67b99a",
                500: "#1abc9c", //
                600: "#358f80",
                700: "#248277",
                800: "#14746f",
                900: "#036666",
            },
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
                    <style jsx global>{`
                        body {
                            min-height:100vh;
                        }
                    `}</style>
                </ErrorBoundary>
            </ChakraProvider>
        </SessionContextProvider>
    );
}
export default App;
