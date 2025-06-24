import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";

export const authConfig = {
    providers: [GitHub],
    // adapter: DrizzleAdapter(db),
    pages: {
        signIn: "/signin",
    },
    callbacks: {
        /**
         * This callback is called when a user is authenticated.
         * It checks if the user is logged in and redirects to the sign-in page if not.
         */
        authorized({ auth, request: { nextUrl } }) {
            console.log("NextAuth authorized callback called");
            const isLoggedIn = !!auth?.user;
            const paths = ["/profile"];

            const isProtectedPath = paths.some((path) =>
                nextUrl.pathname.startsWith(path),
            );
            if (isProtectedPath && !isLoggedIn) {
                const redirectUrl = new URL("/signin", nextUrl.origin);
                redirectUrl.searchParams.set("callbackUrl", nextUrl.href);
                return Response.redirect(redirectUrl);
            }

            console.log("isLoggedIn:", isLoggedIn);

            return true;
        },
    },
} satisfies NextAuthConfig;

export const { auth, signIn, signOut, handlers } = NextAuth(authConfig);
