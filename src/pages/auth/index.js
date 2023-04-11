import { redir } from "@/helpers/redirect";
export default function AuthIndex() {
    redir("/auth/login")
    return <p>404</p>;
};

