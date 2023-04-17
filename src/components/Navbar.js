import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { listenAuth } from "../helpers/redirect.js";
import { Box, Button, ButtonGroup, Container, FormLabel, Image, Input, InputGroup, Spinner, useColorMode } from "@chakra-ui/react";
import ModeToggler from "./ModeToggler.js";

export default function Navbar() {
    const { colorMode } = useColorMode();

    return (
        <Box w={"full"} position={"sticky"} alignItems={"center"} justifyContent={"space-around"} display={"flex"} h={"70px"} shadow={"md"} bg={"palette.light"} _dark={{ bg: "palette.dark" }}>
            <Image h={"80%"} src="gibbresh.png" fallbackSrc="https://via.placeholder.com/400x150?text=logo" rounded={"sm"} />
            <ButtonGroup spacing="2">
                <Button colorScheme={"mint"} variant={"ghost"}>
                    Save
                </Button>
                <Button colorScheme={"mint"} variant={"ghost"}>
                    Cancel
                </Button>
                <Button colorScheme={"mint"} variant={"ghost"}>
                    Cancel
                </Button>
                <Button colorScheme={"mint"} variant={"ghost"}>
                    Cancel
                </Button>
            </ButtonGroup>
            <InputGroup w={"fit-content"} gap={"2"}>
                <Button variant={"ghost"}>Login</Button>
                <Input type="tel" placeholder="phone number" />
                <ModeToggler />
            </InputGroup>
        </Box>
    );
}
