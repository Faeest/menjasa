import { useSession } from "@supabase/auth-helpers-react";
import Navbar from "@/components/Navbar";
import HomeJob from "@/components/HomeJob";
import HomeHero from "@/components/HomeHero";
import Footer from "@/components/Footer";
import InputGroupJob from "@/components/InputGroupJob";
import CardJob from "@/components/CardJob";

export default function Job() {
    return (
        <>
            <Navbar active={3} />
            <InputGroupJob />
            <CardJob />
            <Footer />
        </>
    );
};      

