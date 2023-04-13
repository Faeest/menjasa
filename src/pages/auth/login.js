/** @jsxImportSource @emotion/react */
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Container, Box, Button, FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import RedirectHelper from "@/helpers/redirect.js";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { css, jsx } from "@emotion/react";
import { Field, Form, Formik } from "formik";

function validateData(value) {
    let error;
    if (!value) {
        error = "This field is required";
    }
    return error;
}
export default function Login() {
    RedirectHelper();
    const supabase = useSupabaseClient();
    return (
        <Container maxW={"container.md"} mt={"14"}>
            <Formik
                initialValues={{ email: "",password: "" }}
                onSubmit={async (values, actions) => {
                    await new Promise(r => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {(props) => (
                    <Form>
                        <Field name="email" validate={validateData}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel>First email</FormLabel>
                                    <Input {...field} placeholder="email" />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="password" validate={validateData}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.password && form.touched.password}>
                                    <FormLabel>password</FormLabel>
                                    <Input {...field} placeholder="password" />
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
