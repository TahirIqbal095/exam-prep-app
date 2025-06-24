import { signIn } from "@/auth";
import Container from "@/components/container";

export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<{ callbackUrl?: string }>;
}) {
    const params = await searchParams;
    return (
        <Container className="flex h-screen items-center justify-center">
            <form
                action={async () => {
                    "use server";
                    await signIn("github", {
                        redirectTo: params?.callbackUrl || "/profile",
                    });
                }}
            >
                <button type="submit">Signin with GitHub</button>
            </form>
        </Container>
    );
}
