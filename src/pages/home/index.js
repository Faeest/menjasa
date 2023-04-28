import { useSession } from "@supabase/auth-helpers-react";
import Navbar from "@/components/Navbar";
import HomeJob from "@/components/HomeJob";
import HomeHero from "@/components/HomeHero";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
           <Navbar />
           <HomeHero />
           <HomeJob />
           <Footer />
        </>
    );
};

