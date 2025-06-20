import Button from "@/components/button";
// import Card from "@/components/card";
import Container from "@/components/container";
import { FaCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Scales from "@/components/scales";

export default function Home() {
    return (
        <Container className="relative min-h-[200vh]">
            <Scales />
            <div className="pt-20 md:pt-28">
                <h1 className="from-foreground via-foreground/90 to-foreground/70 mb-6 flex flex-col bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
                    <span>
                        Crack Your
                        <span className="font-serif font-light italic">
                            Next Exam
                        </span>
                    </span>
                    <span>
                        with{" "}
                        <span className="from-primary to-primary/80 bg-gradient-to-b bg-clip-text font-bold text-transparent">
                            Confidence
                        </span>
                    </span>
                </h1>
                <p className="text-muted-foreground max-w-xl text-base md:text-lg">
                    Unlock smarter study strategies and personalized practice
                    with our AI-driven exam prep platform.
                </p>

                <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
                    <Button
                        variant="primary"
                        size="large"
                        className="items-center gap-4"
                    >
                        <span>Get Started</span>
                        <FaArrowRight className="inline-block" />
                    </Button>
                    <Button variant="secondary" size="large">
                        View Example
                    </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                        <FaCheck className="text-primary inline-block" />
                        <p className="text-muted-foreground">AI-Powered MCQs</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheck className="text-primary inline-block" />
                        <p className="text-muted-foreground">
                            Personalized Practice
                        </p>
                    </div>
                    <div className="items-cente flex gap-2">
                        <FaCheck className="text-primary inline-block" />
                        <p className="text-muted-foreground">
                            AI-Powered Insights
                        </p>
                    </div>
                </div>
            </div>
            {/* <Card /> */}
        </Container>
    );
}
