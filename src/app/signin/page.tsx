import Container from "@/components/container";
import SignIn from "@/components/signin";

export default function LoginPage({
    searchParams,
}: {
    searchParams: { callbackUrl?: string };
}) {
    const params = searchParams;
    return (
        <Container className="flex h-screen items-center justify-center">
            <SignIn callbackUrl={params.callbackUrl} />
        </Container>
    );
}
