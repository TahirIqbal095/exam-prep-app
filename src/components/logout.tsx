"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
    return (
        <button className="mt-12" onClick={async () => await signOut()}>
            Logout
        </button>
    );
}
