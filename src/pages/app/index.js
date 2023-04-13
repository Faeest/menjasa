import { useSession } from "@supabase/auth-helpers-react";
import Account from "@/components/Account";
import { Container, Box } from "@chakra-ui/react";
import RedirectHelper from "@/helpers/redirect.js";
export default function PageApp() {
    RedirectHelper()
    const session = useSession();
    return (
        <Container centerContent p={3}>
            <Box padding="4" color="black" w={"lg"}>
                {!session ? "Please wait" : <Account session={session} />}
            </Box>
        </Container>
    );
}
