import { useSession } from "@supabase/auth-helpers-react";
import Account from "@/components/Account";
import { Container, Box } from "@chakra-ui/react";
import RedirectHelper from "@/helpers/redirect.js";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
function App() {
    return (
        <>
            <Navbar />
            <Container></Container>
        </>
    );
}
export default function PageApp() {
    RedirectHelper();
    const session = useSession();
    return !session ? <LoadingScreen /> : <App />;
}
