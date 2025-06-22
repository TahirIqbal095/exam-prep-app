import LoginForm from "../ui/loginForm";
import Container from "@/components/container";

export default function LoginPage() {
    return (
        <Container className="flex h-screen items-center justify-center">
            <LoginForm />
        </Container>
    );
}
