import { Container, Box, Button, FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement } from "@chakra-ui/react";
import RedirectHelper from "@/helpers/redirect.js";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { css, jsx } from "@emotion/react";
import { Field, Form, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function validateData(value) {
    let error;
    if (!value) {
        error = "This field is required";
    }
    return error;
}
export default function Login() {
    RedirectHelper();
    const supabase = useSupabaseClient(),
        signInWithEmail = async (email, pass) => {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: pass,
            });
        },
        [show, setShow] = useState(false),
        handleClick = () => setShow(!show);
    return (
        <Container maxW={"container.md"} mt={"14"}>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={async (values, actions) => {
                    await signInWithEmail(values.email, values.password);
                    await new Promise((r) => setTimeout(r, 1000));
                    actions.setSubmitting(false);
                }}
            >
                {(props) => (
                    <Form>
                        <Field name="email" validate={validateData}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel>First email</FormLabel>
                                    <Input type="email" {...field} placeholder="email" />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="password" validate={validateData}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.password && form.touched.password}>
                                    <FormLabel>password</FormLabel>
                                    <InputGroup>
                                        <Input type={show ? "text" : "password"} {...field} placeholder="password" />

                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                                <FontAwesomeIcon icon={solid.faEye} />
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
