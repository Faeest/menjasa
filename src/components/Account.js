import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { listenAuth } from "../helpers/redirect.js";
import { Box, Container, FormLabel, Input } from "@chakra-ui/react";
import ModeToggler from "./ModeToggler.js";

export default function Account({ session }) {
    const supabase = useSupabaseClient();
    const user = useUser();
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null);
    const [website, setWebsite] = useState(null);
    const [avatar_url, setAvatarUrl] = useState(null);
    listenAuth(supabase);
    useEffect(() => {
        getProfile();
    }, [session]);
    return;
    async function getProfile() {
        try {
            setLoading(true);
        //     let { data, error, status } = await supabase.from("jobs").select(`
        //     id, 
        //     title, 
        //     tags ( id, name )
        //   `);
            let { data, error, status } = await supabase.from("profiles").select(`username, website, avatar_url`).eq("id", user.id).single();

            if (error && status !== 406) {
                throw error;
            }

            if (data) {
                setUsername(data.username);
                setWebsite(data.website);
                setAvatarUrl(data.avatar_url);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    async function updateProfile({ username, website, avatar_url }) {
        try {
            setLoading(true);

            const updates = {
                id: user.id,
                username,
                website,
                avatar_url,
                updated_at: new Date().toISOString(),
            };

            let { error } = await supabase.from("profiles").upsert(updates);
            if (error) throw error;
            alert("Profile updated!");
        } catch (error) {
            alert("Error updating the data!");
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container className="form-widget">
            <ModeToggler />
            <Box>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input boxShadow="md" focusBorderColor="palette.mint" id="email" type="text" value={session.user.email} disabled />
            </Box>
            <Box>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input boxShadow="md" focusBorderColor="palette.mint" id="username" type="text" value={username || ""} onChange={(e) => setUsername(e.target.value)} />
            </Box>
            <Box>
                <FormLabel htmlFor="website">Website</FormLabel>
                <Input boxShadow="md" focusBorderColor="palette.mint" id="website" type="website" value={website || ""} onChange={(e) => setWebsite(e.target.value)} />
            </Box>

            <Box>
                <button className="button primary block" onClick={() => updateProfile({ username, website, avatar_url })} disabled={loading}>
                    {loading ? "Loading ..." : "Update"}
                </button>
            </Box>

            <Box>
                <button className="button block" onClick={() => supabase.auth.signOut()}>
                    Sign Out
                </button>
            </Box>
        </Container>
    );
}
