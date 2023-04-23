import { useState, useEffect, useRef } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Box, Button, ButtonGroup, Container, FormLabel,IconButton,Tooltip, Image, Input, InputGroup, Spinner, useColorMode, Link, textDecoration, Menu, MenuButton, MenuList, MenuItem, } from "@chakra-ui/react";
import ModeToggler from "./ModeToggler.js";
import { css } from "@emotion/react";
import { listenAuth, redir } from "@/helpers/redirect.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import NavbarLink from "./Navbarlink.js";

/** @jsxImportSource @emotion/react */

export default function Navbar() {
    const { colorMode } = useColorMode(),
    supabase = useSupabaseClient();

    return (
        <Box w={"full"} position={"sticky"} alignItems={"center"} justifyContent={"space-around"} display={"flex"} h={"70px"} shadow={"md"} bg={"palette.white"} _dark={{ bg: "palette.dark" }}>
            <Link h={"40%"} href="/">
                <Image h={"100%"} src={colorMode == "dark" ? "/images/logo-white.png" : "/images/logo.png"} alt="logo-harmonyhires"/>
            </Link>

            <ul href="/about-us"  css={css(`list-style:none;display:flex;gap:3rem;`)}>
                <li><NavbarLink href="/">About us</NavbarLink></li>
                <li className="drophover"><NavbarLink href="/">FAQ</NavbarLink>
                <Box className="menu">
                    <NavbarLink href="/">Test</NavbarLink>
                </Box>

                </li>
                <li><NavbarLink href="/">Job</NavbarLink></li>
                <li><NavbarLink href="/">Talent Finder</NavbarLink></li>
            </ul>
            
            <ButtonGroup>
                <Tooltip hasArrow placement="top" label="Theme" bg="palette.dark" color="palette.light">
                    <Box overflow={"hidden"}>
                        <ModeToggler borderRadius={"2sm"} />
                    </Box>
                </Tooltip>
                <Tooltip hasArrow placement="top" label="Log Out" bg="palette.dark" color="palette.light">
                    <IconButton borderRadius={"2sm"} colorScheme="mint" onClick={async () => {await supabase.auth.signOut();redir("/auth/login")}} variant="outline" icon={<FontAwesomeIcon icon={solid.faRightFromBracket} />} />
                </Tooltip>
            </ButtonGroup>
        </Box>
    );
}