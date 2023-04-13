import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Box, Button, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
import { css } from "@emotion/react";
import Router from "next/router";

export default function ErrorHandler({ type }) {
    const datas = {
            404: {
                title: "Page not found",
                desc: "Seems like you face a non existing page! You can either check the url is right or not, or maybe you can go back and chill.",
            },
            401: {
                title: "Unauthorized",
                desc: "Seems like you end up in an login required page! You can either login, or maybe you can go back and chill.",
            },
            403: {
                title: "Forbidden",
                desc: "No hack for ya. ya'll better chill and stop messing around with the website. This is a Warning.",
            },
        },
        pagetitle = `Error ${type} !`;
    return (
        <Flex bg="palette.white" minW={"full"} h={"100vh"}>
            <Head>
                <title>{pagetitle}</title>
            </Head>
            <Container display={"flex"} flexDirection={{ base: "column-reverse", md: "row" }} justifyContent={{ base: "start", md: "center" }} alignContent={"baseline"} maxW="container.lg" marginY={{ base: "0", md: "14" }} flexWrap={"wrap"}>
                <HStack pe={2} flexWrap={"wrap"} w={{ base: "100%", md: "50%" }} alignContent={"baseline"}>
                    <HStack h={"fit-content"} w={"full"} marginTop={{ base: "5", md: "10" }}>
                        <Text fontSize={{ base: "3xl", sm: "6xl" }} fontWeight={"bold"} color={"palette.dark"}>
                            Error
                        </Text>
                        <Text fontSize={{ base: "3xl", sm: "6xl" }} fontWeight={"extrabold"} marginLeft={2} color={"palette.lime"}>
                            {type ? type : "Not recognized"}
                        </Text>
                        <Text fontSize={{ base: "3xl", sm: "6xl" }} fontWeight={"bold"} marginLeft={2} color={"palette.dark"}>
                            !
                        </Text>
                    </HStack>
                    <Text fontSize={{ base: "2xl", sm: "4xl" }} borderTop={"2px"} color={"palette.lime"} css={css(`margin-left:0px !important;`)} fontWeight={"bold"}>
                        {datas[type]?.title ? datas[type]?.title : "This error is not recognized by the server"}
                    </Text>
                    <Text fontSize={{ base: "lg", sm: "xl" }} w={"full"} color={"palette.dark"} css={css(`margin-left:0px !important;margin-top:1rem !important;`)} fontWeight={"semibold"}>
                        {datas[type]?.desc ? datas[type]?.desc : "Reach the developer for further information / report."}
                    </Text>
                    <Button onClick={() => Router.back()} css={css(`margin-left:0px !important;margin-top:1rem !important;`)} variant="outline" fontWeight={700} color={"palette.lime"} border={"2px"} borderColor={"palette.lime"} size="lg" _hover={{ bg: "palette.lime", color: "palette.white" }} _active={{ bg: "palette.black", borderColor: "palette.black" }}>
                        Go Back
                    </Button>
                </HStack>
                <Image src="/question.svg" maxW={"400px"} w={{ base: "100%", md: "50%" }} marginX={"auto"} />
            </Container>
        </Flex>
    );
}
