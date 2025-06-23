import Container from "@/components/container";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await auth();

    if (!session?.user) {
        redirect("/signin?callbackUrl=/profile");
    }

    console.log("Session:", session.user);

    return (
        <Container className="flex min-h-screen items-center justify-center">
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </Container>
    );
}
