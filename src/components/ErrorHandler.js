import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Box, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
import { css } from "@emotion/react";

export default function ErrorHandler({ type }) {
    const datas = {
        404: {
            title: "Page not found",
            desc: "GO BACK YOOU MATHER FATHER",
            img: null,
        },
    };
    return (
        <Flex bg="palette.white" minW={"full"} h={"100vh"}>
            <Head>
                <title>Error {type} !</title>
            </Head>
            <Container display={"flex"} maxW="container.lg" marginY={"14"} flexWrap={"wrap"}>
                <Box display={{ base: "block", md: "none" }} background={"palette.lime"} w={"full"} minH={"10%"}></Box>
                <HStack flexWrap={"wrap"} w={{ base: "100%", md: "50%" }} alignContent={"baseline"}>
                    <HStack h={"fit-content"} w={"full"} marginTop={"10"}>
                        <Text fontSize={"6xl"} fontWeight={"bold"} color={"palette.dark"}>
                            Error
                        </Text>
                        <Text fontSize={"6xl"} fontWeight={"extrabold"} marginLeft={2} color={"palette.lime"}>
                            {type}
                        </Text>
                        <Text fontSize={"6xl"} fontWeight={"bold"} marginLeft={2} color={"palette.dark"}>
                            !
                        </Text>
                    </HStack>
                    <Text fontSize={"4xl"} borderTop={"2px"} color={"palette.lime"} css={css(`margin-left:0px !important;`)} fontWeight={"bold"}>
                        {datas[type].title}
                    </Text>
                    <Text fontSize={"2xl"} w={"full"} color={"palette.dark"} css={css(`margin-left:0px !important;margin-top:1rem !important;`)} fontWeight={"semibold"}>
                        {datas[type].desc}
                    </Text>
                </HStack>
                <Box display={{ base: "none", md: "block" }} background={"palette.lime"} w={"50%"} h={"full"}></Box>
            </Container>
        </Flex>
    );
}
