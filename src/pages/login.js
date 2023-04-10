/** @jsxImportSource @emotion/react */
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Container, ChakraProvider, Box } from "@chakra-ui/react";
import RedirectHelper from "../helpers/redirect.js";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { css, jsx } from "@emotion/react";
export default function Login() {
    RedirectHelper();
    const supabase = useSupabaseClient();
    return (
        <ChakraProvider>
            <Box
                height="100vh"
                css={css(`background-image:  linear-gradient(30deg, #f8f9fa 12%, transparent 12.5%, transparent 87%, #f8f9fa 87.5%, #f8f9fa), linear-gradient(150deg, #f8f9fa 12%, transparent 12.5%, transparent 87%, #f8f9fa 87.5%, #f8f9fa), linear-gradient(30deg, #f8f9fa 12%, transparent 12.5%, transparent 87%, #f8f9fa 87.5%, #f8f9fa), linear-gradient(150deg, #f8f9fa 12%, transparent 12.5%, transparent 87%, #f8f9fa 87.5%, #f8f9fa), linear-gradient(60deg, rgba(248,249,250,0.5) 25%, transparent 25.5%, transparent 75%, rgba(248,249,250,0.5) 75%, rgba(248,249,250,0.5)), linear-gradient(60deg, rgba(248,249,250,0.5) 25%, transparent 25.5%, transparent 75%, rgba(248,249,250,0.5) 75%, rgba(248,249,250,0.5));
                background-size: 36px 63px;
                background-position: 0 0, 0 0, 18px 31.5px, 18px 31.5px, 0 0, 18px 31.5px;
                background-color: #dee2e6;
            `)}
            >
                <Container p={3}>
                    <Auth
                        supabaseClient={supabase}
                        appearance={{
                            theme: ThemeSupa,
                            variables: {
                                default: {
                                    fonts: {
                                        inputFontFamily: "poppins",
                                        bodyFontFamily: "poppins",
                                        buttonFontFamily: "poppins",
                                        labelFontFamily: "poppins",
                                    },
                                    colors: {
                                        brand: "#343a40",
                                        brandAccent: "#343a40",
                                        brandButtonText: "white",
                                        defaultButtonBackground: "white",
                                        defaultButtonBackgroundHover: "#eaeaea",
                                        messageText: "#343a40",
                                        messageTextDanger: "red",
                                        anchorTextColor: "#343a40",
                                        anchorTextHoverColor: "#343a40",
                                    },
                                },
                            },
                        }}
                    />
                </Container>
            </Box>
        </ChakraProvider>
    );
}
