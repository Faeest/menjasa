/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/home",
                permanent: true,
            },
            {
                source: "/login",
                destination: "/auth/login",
                permanent: true,
            },
            {
                source: "/auth",
                destination: "/auth/login",
                permanent: true,
            },
            {
                source: "/signin",
                destination: "/auth/login",
                permanent: true,
            },
            {
                source: "/signup",
                destination: "/auth/login",
                permanent: true,
            },
        ];
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
