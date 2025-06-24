"use client";

import { signInWithGithub } from "@/actions/auth.actions";
import { FaGithub } from "react-icons/fa";
import Button from "./button";

export default function SignIn({ callbackUrl }: { callbackUrl?: string }) {
    return (
        <div>
            <form
                action={async () => {
                    await signInWithGithub(callbackUrl);
                }}
            >
                <Button
                    className="flex items-center rounded"
                    size="large"
                    type="submit"
                >
                    <FaGithub className="mr-2 inline" />
                    <span>Sign in with GitHub</span>
                </Button>
            </form>
        </div>
    );
}
