"use client";

import Container from "@/components/container";
import { signOut } from "next-auth/react";
import React from "react";

export default function TestPage() {
    return (
        <Container className="flex min-h-screen flex-col items-center justify-center gap-6">
            <div>this is the test page</div>

            <div>
                <form
                    action={async () => {
                        await signOut({ redirectTo: "/signin" });
                    }}
                >
                    <button type="submit">Signout</button>
                </form>
            </div>
        </Container>
    );
}
