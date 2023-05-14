import { useSession } from "@supabase/auth-helpers-react";
import Navbar from "@/components/Navbar";
import HomeJob from "@/components/HomeJob";
import HomeHero from "@/components/HomeHero";
import Footer from "@/components/Footer";
import InputGroupJob from "@/components/InputGroupJob";
import CardJob from "@/components/CardJob";
import LoadingScreen from "@/components/LoadingScreen";

export default function Job() {
    const session = useSession();

    return !session ? (
        <LoadingScreen />
    ) : (
        <>
            <Navbar active={3} />
            <InputGroupJob />
            <CardJob />
            <Footer />
        </>
    );
}
