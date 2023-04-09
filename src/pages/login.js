import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";
import { Container, Box, ChakraProvider } from "@chakra-ui/react";
import { redirect } from 'next/navigation';

const Home = () => {
    const session = useSession();
    const supabase = useSupabaseClient();
    if(session) {
        return window.location.replace("/app")
    }
    return (
        <ChakraProvider>
            <Container centerContent p={3}>
                <Auth
                    supabaseClient={supabase}
                    appearance={{
                        theme: ThemeSupa,
                        variables: {
                            default: {
                                colors: {
                                    brand: "red",
                                    brandAccent: "transparent",
                                },
                            },
                        },
                    }}
                    theme="dark"
                />
            </Container>
        </ChakraProvider>
    );
};

export default Home;
