import Container from "@/components/container";
import React from "react";
import { auth } from "@/auth";

export default async function Dashboard() {
    const session = await auth();

    return (
        <Container className="flex min-h-screen items-center justify-center">
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </Container>
    );
}
