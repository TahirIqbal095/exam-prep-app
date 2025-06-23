import { signIn } from "@/auth";
import Container from "@/components/container";

export default function LoginPage() {
    return (
        <Container className="flex h-screen items-center justify-center">
            <form
                action={async () => {
                    "use server";
                    await signIn("github", { redirectTo: "/profile" });
                }}
            >
                <button type="submit">Signin with GitHub</button>
            </form>
        </Container>
    );
}
