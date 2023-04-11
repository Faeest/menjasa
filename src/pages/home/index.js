import { useSession } from "@supabase/auth-helpers-react";
import { Container, Box } from "@chakra-ui/react";
import RedirectHelper from "@/helpers/redirect.js";
export default function Home() {
	RedirectHelper()
    const session = useSession();
    return (
            <Container centerContent p={3}>
                <Box padding="4" color="black" w={"lg"}>
                    <p>hello world, this is menjasa</p>
                </Box>
            </Container>
    );
};

