import { useSession } from "@supabase/auth-helpers-react";
import Account from "@/components/Account";
import { Container, Box, ButtonGroup, Tooltip, IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import RedirectHelper from "@/helpers/redirect.js";
import LoadingScreen from "@/components/LoadingScreen";
import { listenAuth, redir } from "@/helpers/redirect.js";
import ModeToggler from "@/components/ModeToggler";
import Navbar from "@/components/Navbar";

function App() {
    const supabase = useSupabaseClient();
    return (
        <>
            <Navbar />
            <ButtonGroup>
                <Tooltip hasArrow placement="top" label="Theme" bg="palette.dark" color="palette.light">
                    <Box overflow={"hidden"}>
                        <ModeToggler borderRadius={"2sm"} />
                    </Box>
                </Tooltip>
                <Tooltip hasArrow placement="top" label="Log Out" bg="palette.dark" color="palette.light">
                    <IconButton
                        borderRadius={"2sm"}
                        colorScheme="mint"
                        onClick={async () => {
                            await supabase.auth.signOut();
                            redir("/auth/login");
                        }}
                        variant="outline"
                        icon={<FontAwesomeIcon icon={solid.faRightFromBracket} />}
                    />
                </Tooltip>
            </ButtonGroup>
        </>
    );
}
export default function PageApp() {
    const session = useSession();
    return !session ? <LoadingScreen /> : <App />;
}
