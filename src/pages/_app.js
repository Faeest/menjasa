import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import ErrorBoundary from "@/components/ErrorBoundary";
import { extendTheme } from "@chakra-ui/react";
import { Html } from "next/document";

function App({ Component, pageProps }) {
    const [supabase] = useState(() => createBrowserSupabaseClient());
    const theme = extendTheme({
        radii: {
            "2sm": ".25rem",
        },
        colors: {
            white: "#e9ecef",
            black: "#2c3e50",
            gunmetal: {
                50: "#EEF2F6",
                100: "#D0DBE7",
                200: "#B1C3D7",
                300: "#93ACC8",
                400: "#7494B9",
                500: "#567DA9",
                600: "#456487",
                700: "#344B65",
                800: "#223244",
                900: "#111922",
            },
            charcoal: {
                50: "#EFF2F6",
                100: "#D1DBE6",
                200: "#B3C4D5",
                300: "#96ADC5",
                400: "#7896B5",
                500: "#5A7FA5",
                600: "#486684",
                700: "#364C63",
                800: "#243342",
                900: "#121921",
            },
            flash: {
                50: "#F0F2F4",
                100: "#D6DBE1",
                200: "#BBC4CE",
                300: "#A1ADBA",
                400: "#8696A7",
                500: "#6B8094",
                600: "#566676",
                700: "#404D59",
                800: "#2B333B",
                900: "#151A1E",
            },
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
            mint: {
                50: "#E9FCF8",
                100: "#C0F6EC",
                200: "#98F1DF",
                300: "#70EBD3",
                400: "#47E6C6",
                500: "#1abc9c",
                600: "#15a589",
                700: "#138670",
                800: "#0C5A4A",
                900: "#062D25",
            },
            tiffany: {
                50: "#EBF9F7",
                100: "#C8EEE9",
                200: "#A5E4DB",
                300: "#82D9CD",
                400: "#5FCEBF",
                500: "#3CC3B1",
                600: "#309C8E",
                700: "#24756A",
                800: "#184E47",
                900: "#0C2723",
            },
            palette: {
                mint: "#1abc9c",
                tiffany: "#7fd8cc",
                dark: "#1f2d3d",
                black: "#2c3e50",
                light: "#e9ecef",
                white: "#ffff",
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
