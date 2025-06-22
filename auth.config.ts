import type { NextAuthConfig } from "next-auth";
import type { Provider } from "next-auth/providers";

export const authConfig = {
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

            if (isOnDashboard && !isLoggedIn) {
                return false; // This will redirect to the signIn page
            }

            // If logged in and trying to access public pages, redirect to dashboard
            if (isLoggedIn && !isOnDashboard) {
                return Response.redirect(new URL("/dashboard", nextUrl));
            }

            // Allow access to public pages when not logged in
            return true;
        },
    },
    providers: [] as Provider[],
    pages: {
        signIn: "/login",
    },
} satisfies NextAuthConfig;
