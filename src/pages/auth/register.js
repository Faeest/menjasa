import { Container, Box, Button, FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, ButtonGroup, Heading, Tooltip, Select, useToast, IconButton } from "@chakra-ui/react";
import { listenAuth, redir } from "@/helpers/redirect.js";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Field, Form, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ModeToggler from "@/components/ModeToggler";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export default function Register() {
    const validateEmail = (value) => {
            let error = !value
                ? "Email field is required"
                : !String(value)
                      .toLowerCase()
                      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                ? "Use a valid email"
                : undefined;
            return error;
        },
        validateUsername = (value) => {
            if (value != username) {
                setUsername(value);
                setValidated(false);
            }
            let error = !value
                ? "Username field is required"
                : !String(value)
                      .toLowerCase()
                      .match(/^[a-zA-Z0-9]+$/)
                ? "Your username Isn't valid"
                : value.length < 5
                ? "Not long enough!"
                : undefined;
            return error;
        },
        validateUsername2 = async () => {
            if (validateUsername(username) != undefined)
                return toast({
                    position: "top",
                    title: "Warning",
                    description: validateUsername(username),
                    status: "warning",
                    duration: 1500,
                    isClosable: true,
                });
            let res = !(await supabase.from("profiles").select("username").eq("username", username)).data[0];
            if (!res) {
                toast({
                    position: "top",
                    title: "Unlucky!",
                    description: "Your username is used by other!",
                    status: "warning",
                    duration: 1500,
                    isClosable: true,
                });
            }
            setValidated(res);
        },
        validatePass = (value) => {
            return !value ? "Pass field is required" : undefined;
        },
        supabase = useSupabaseClient(),
        signUp = async (email, pass, role, username) => {
            return await supabase.auth.signUp({
                email: email,
                password: pass,
                options: {
                    data: {
                        role: role,
                        user_name: username,
                    },
                },
            });
        },
        [show, setShow] = useState(false),
        [username, setUsername] = useState(""),
        [validated, setValidated] = useState(false),
        [option, setOption] = useState([]),
        [keys, setKeys] = useState([]),
        toast = useToast(),
        handleClick = () => setShow(!show);
    useEffect(() => {
        supabase
            .from("roles")
            .select()
            .then((e) => {
                if (option.length >= Object.keys(e.data).length) return;
                e.data.forEach((r) => {
                    if (!keys.includes(r.id)) {
                        option.push({ id: r.id, name: r.name });
                        setOption([...option]);
                        keys.push(r.id);
                    }
                });
            });
    }, [option]);
    return (
        <Container maxW={"md"} mt={"14"} h={"full"}>
            <Formik
                initialValues={{ email: "", password: "", username: "", role: "" }}
                onSubmit={async (values, actions) => {
                    if (!validated)
                        return toast({
                            position: "top",
                            title: "Error!",
                            description: "Validate you username first!",
                            status: "error",
                            duration: 2250,
                            isClosable: true,
                        });
                    listenAuth(supabase);
                    console.log(values);
                    let { error, data } = await signUp(values.email, values.password, values.role, values.username);
                    if (error) {
                        return toast({
                            position: "top",
                            title: "Error!",
                            description: error.message,
                            status: "error",
                            duration: 2250,
                            isClosable: true,
                        });
                    }
                    await new Promise((r) => setTimeout(r, 2250));
                    actions.setSubmitting(false);
                }}
            >
                {(props) => (
                    <Form css={css(`display:flex;flex-wrap:wrap;justify-content:space-between`)}>
                        <Heading w={"full"} fontWeight={"bold"} bgGradient="linear(to-r,palette.black 51%, palette.mint 50%)" _dark={{ bgGradient: "linear(to-r,palette.light 51%, palette.tiffany 50%)" }} bgClip="text" textAlign={"center"} as="h1" size="2xl" pb={"1rem"}>
                            Register
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
                        <Field name="role" type="option" >
                            {({ field, form }) => (
                                <FormControl mt={"1.5rem"} w={"48%"} isInvalid={form.errors.role && form.touched.role}>
                                    <FormLabel>Role</FormLabel>
                                    <Select boxShadow="md" focusBorderColor="palette.mint" {...field}>
                                        {option.map((e,x) => (
                                            <option value={e.id} key={e.id}>
                                                {e.name}
                                            </option>
                                        ))}
                                    </Select>
                                    <FormErrorMessage justifyContent={"end"}>{form.errors.role}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="username" validate={validateUsername}>
                            {({ field, form }) => (
                                <FormControl mt={"1.5rem"} w={"48%"} isInvalid={form.errors.username && form.touched.username}>
                                    <FormLabel>Username</FormLabel>
                                    <InputGroup>
                                        <Input boxShadow="md" focusBorderColor="palette.mint" type="text" {...field} placeholder="username" />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" disabled={validated} colorScheme={validated ? "green" : "gray"} onClick={validateUsername2}>
                                                {validated ? <FontAwesomeIcon icon={solid.faCheck} /> : <FontAwesomeIcon icon={solid.faMagnifyingGlass} />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage justifyContent={"end"}>{form.errors.username}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <ButtonGroup mt={"1.5rem"} justifyContent={"space-between"} w={"full"}>
                            <Button colorScheme="mint" isLoading={props.isSubmitting} type="submit">
                                Register
                            </Button>
                            <ButtonGroup>
                                <Tooltip hasArrow placement="top" label="Sign Up" bg="palette.dark" color="palette.light">
                                    <IconButton borderRadius={"2sm"} colorScheme="mint" onClick={() => redir("/auth/login")} variant="outline" icon={<FontAwesomeIcon icon={solid.faRightToBracket} />} />
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

// !!((await supabase.from("profiles").select("username").eq("username",value)).data[0])
