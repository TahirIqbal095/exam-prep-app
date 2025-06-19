import Card from "@/components/card";
import Container from "@/components/container";

export default function Home() {
    return (
        <Container className="min-h-[200vh] pt-8">
            <div className="text-center pt-16 md:pt-24">
                <h1 className="text-3xl md:text-4xl text-primary font-semibold mb-2">
                    Crack Your Next Exam with{" "}
                    <span className="font-bold bg-gradient-to-b from-blue-700 to-blue-400 bg-clip-text text-transparent">
                        Confidence
                    </span>
                </h1>
                <p className="text-base text-secondary max-w-xl mx-auto">
                    Practice, prepare, and succeed with our comprehensive exam prep resources.
                    Access mock tests tips to boost and achieve your goals.
                </p>
            </div>
            <Card />
        </Container>
    );
}
