import { useSession } from "@supabase/auth-helpers-react";
import Navbar from "@/components/Navbar";
import HomeJob from "@/components/HomeJob";
import HomeHero from "@/components/HomeHero";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
    const session = useSession();
    return !session ? (
        <LoadingScreen />
    ) : (
        <>
            <Navbar active={1} />
            <HomeHero />
            <HomeJob />
            <Footer />
        </>
    );
}
