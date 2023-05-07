import { Container, Box, Button, FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, useColorMode, IconButton, ButtonGroup, Heading, Tooltip, Image, useDisclosure, Alert, AlertIcon, AlertTitle, CloseButton, AlertDescription, useToast } from "@chakra-ui/react";
import { listenAuth, redir } from "@/helpers/redirect.js";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Field, Form, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ModeToggler from "@/components/ModeToggler";
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
        {
            isOpen: isVisible,
            onClose,
            onOpen,
          } = useDisclosure({ defaultIsOpen: false }),
        
        supabase = useSupabaseClient(),
        toast = useToast(),
        signInWithEmail = async (email, pass) => {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: pass,
            });
            if(error) {
                toast({
                    position: "top",
                    title: "Error!",
                    description: "Validate you username first!",
                    status: "error",
                    duration: 1500,
                    isClosable: true,
                })
            }
        },
        [show, setShow] = useState(false),
        handleClick = () => setShow(!show);

        const { colorMode } = useColorMode();

    return (
        <div className="mx-auto bg-white dark:bg-gunmetal">
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
                   <Form
                     className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1"
                   >
                    <div  className="bg-cover hidden lg:block bg-no-repeat bg-center h-screen md:hidden sm:hidden bg-[url('/images/auth/bg-auth.jpg')]">
                    </div>
                    <div className="py-12 lg:py-28 px-10">
                        <img className="block h-6 w-auto left-0 top-0 m-auto mb-6 lg:hidden dark:hidden" src="/images/logo.png" alt="Your Company" />
                        <img className="hidden h-8 w-auto left-0 top-0 m-auto mb-6 lg:block dark:hidden" src="/images/logo.png" alt="Your Company" />
                        <img className="dark:block h-6 w-auto left-0 top-0 m-auto mb-6 dark:lg:hidden hidden" src="/images/logo-white.png" alt="Your Company" />
                        <img className="dark:hidden h-8 w-auto left-0 top-0 m-auto mb-6 dark:lg:block hidden" src="/images/logo-white.png" alt="Your Company" />
                        <h1 className="font-[600] text-xl md:text-2xl lg:text-3xl mb-2 text-center dark:text-white text-gunmetal"> Hello Welcome Back !</h1>
                        <p className="text-center text-slate-500 md:px-5 lg:px-10 text-sm mb-4">Login and search for the dream job and talent you want, i hope you find your best job and your best talent</p>

                        <Field name="email" validate={validateEmail}>
                            {({ field, form }) => (
                            <FormControl className="max-w-lg left-0 top-o m-auto" isInvalid={form.errors.email && form.touched.email}>
                                <FormLabel>Email</FormLabel>
                                <Input className="bg-white" boxShadow="md" focusBorderColor="palette.mint" type="email" {...field} placeholder="email" />
                                <FormErrorMessage className="mb-0" justifyContent={"end"}>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>

                        <Field name="password" validate={validatePass}>
                            {({ field, form }) => (
                            <FormControl mt="1rem" className="max-w-lg left-0 top-o m-auto" isInvalid={form.errors.password && form.touched.password}>
                                <FormLabel>password</FormLabel>
                                <InputGroup>
                                    <Input boxShadow="md" focusBorderColor="palette.mint" type={show ? "text" : "password" } {...field}
                                        placeholder="password" />

                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                                            {!show ?
                                            <FontAwesomeIcon icon={solid.faEye} /> :
                                            <FontAwesomeIcon icon={solid.faEyeSlash} />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage className="mt-0" justifyContent={"end"}>{form.errors.password}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>
                        <div className="max-w-lg justify-between flex m-auto left-0 top-0 mt-6">
                            <Button borderRadius={"sm"} colorScheme="mint" isLoading={props.isSubmitting} type="submit">
                                Sign in
                            </Button>
                            <ButtonGroup>
                                <Tooltip hasArrow placement="top" label="Sign Up" bg="palette.dark" color="palette.light">
                                    <IconButton borderRadius={"2sm"} onClick={()=> redir("/auth/register")} variant="outline"
                                        colorScheme="tiffany" icon={
                                        <FontAwesomeIcon icon={solid.faPen} />} />
                                </Tooltip>
                                <Tooltip hasArrow placement="top" label="Theme" bg="palette.dark" color="palette.light">
                                    <Box overflow={"hidden"}>
                                        <ModeToggler borderRadius={"2sm"} />
                                    </Box>
                                </Tooltip>
                            </ButtonGroup>
                        </div>
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    );
}
