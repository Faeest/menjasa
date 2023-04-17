import { Container, Box, Button, FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, useColorMode, IconButton, ButtonGroup, Heading, Tooltip } from "@chakra-ui/react";
import { listenAuth, redir } from "@/helpers/redirect.js";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Field, Form, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ModeToggler from "@/components/ModeToggler";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export default function Login() {
    const validateEmail = (value) => {
            let error = !value
                ? "This field is required"
                : !String(value)
                      .toLowerCase()
                      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                ? "Use a valid email"
                : undefined;
            return error;
        },
        validatePass = (value) => {
            return !value ? "This field is required" : undefined;
        },
        supabase = useSupabaseClient(),
        signInWithEmail = async (email, pass) => {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: pass,
            });
        },
        [show, setShow] = useState(false),
        handleClick = () => setShow(!show);
    return (
        <Container maxW={"md"} mt={"14"} h={"full"}>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={async (values, actions) => {
                    listenAuth(supabase);
                    await signInWithEmail(values.email, values.password);
                    await new Promise((r) => setTimeout(r, 1000));
                    actions.setSubmitting(false);
                }}
            >
                {(props) => (
                    <Form css={css(`display:flex;flex-wrap:wrap;`)}>
                        <Heading w={"full"} fontWeight={"bold"} bgGradient="linear(to-r,palette.black 54%, palette.mint 50%)" _dark={{ bgGradient: "linear(to-r,palette.light 54%, palette.tiffany 50%)" }} bgClip="text" textAlign={"center"} as="h1" size="2xl" pb={"1rem"}>
                            Login
                        </Heading>
                        <Field name="email" validate={validateEmail}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel>Email</FormLabel>
                                    <Input boxShadow="md" focusBorderColor="palette.mint" type="email" {...field} placeholder="email" />
                                    <FormErrorMessage justifyContent={"end"}>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="password" validate={validatePass}>
                            {({ field, form }) => (
                                <FormControl mt={"1.5rem"} isInvalid={form.errors.password && form.touched.password}>
                                    <FormLabel>password</FormLabel>
                                    <InputGroup>
                                        <Input boxShadow="md" focusBorderColor="palette.mint" type={show ? "text" : "password"} {...field} placeholder="password" />

                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                                {!show ? <FontAwesomeIcon icon={solid.faEye} /> : <FontAwesomeIcon icon={solid.faEyeSlash} />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage justifyContent={"end"}>{form.errors.password}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <ButtonGroup mt={"1.5rem"} justifyContent={"space-between"} w={"full"}>
                            <Button colorScheme="mint" isLoading={props.isSubmitting} type="submit">
                                Login
                            </Button>
                            <ButtonGroup>
                                <Tooltip hasArrow placement="top" label="Sign Up" bg="palette.dark" color="palette.light">
                                    <IconButton borderRadius={"2sm"} onClick={() => redir("/auth/register")} variant="outline" colorScheme="tiffany" icon={<FontAwesomeIcon icon={solid.faPen} />} />
                                </Tooltip>
                                <Tooltip hasArrow placement="top" label="Theme" bg="palette.dark" color="palette.light">
                                    <Box overflow={"hidden"}>
                                        <ModeToggler borderRadius={"2sm"} />
                                    </Box>
                                </Tooltip>
                            </ButtonGroup>
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
