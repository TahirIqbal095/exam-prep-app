import Container from "@/components/container";
import SignIn from "@/components/signin";

export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<{ callbackUrl?: string }>;
}) {
    const params = await searchParams;
    return (
        <Container className="flex h-screen items-center justify-center">
            <SignIn callbackUrl={params.callbackUrl} />
        </Container>
    );
}
