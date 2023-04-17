import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { listenAuth } from "../helpers/redirect.js";
import { Box, Container, FormLabel, Input, Spinner } from "@chakra-ui/react";

export default function LoadingScreen() {
    return (
        <Container maxW={"lg"} display={"flex"} justifyContent={"center"} alignItems={"center"} minH={"100vh"}>
            <Spinner w={"200px"} h={"200px"} thickness="10px" shadow={"lg"} color={"mint.600"}/>
        </Container>
    );
}
