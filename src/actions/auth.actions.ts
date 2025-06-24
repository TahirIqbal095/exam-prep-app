"use server";

import { signIn } from "@/auth";

export async function signInWithGithub(callbackUrl?: string) {
    return signIn("github", {
        redirectTo: callbackUrl || "/profile",
    });
}

export async function signOut() {
    return signIn("github", {
        redirectTo: "/signin",
    });
}
