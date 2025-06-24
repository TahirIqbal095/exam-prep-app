import Container from "@/components/container";
import React from "react";
import { auth } from "@/auth";
import Logout from "@/components/logout";

export default async function Dashboard() {
    const session = await auth();

    return (
        <Container className="flex min-h-screen flex-col items-center justify-center">
            <pre>{JSON.stringify(session, null, 2)}</pre>

            <Logout />
        </Container>
    );
}
