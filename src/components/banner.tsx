import Button from "./button";
import { motion } from "motion/react";

export default function Banner() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="from-primary via-primary/80 to-primary/40 relative mt-8 mb-4 flex min-h-[45vh] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b shadow-lg"
        >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 text-center">
                <h1 className="from-foreground via-foreground/90 to-foreground/70 mb-6 flex flex-col bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
                    Ace Your Exams. Unlock Your Potential.
                </h1>
                <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg md:text-xl">
                    Unlock smarter study strategies and personalized practice
                    with our AI-driven exam prep platform.
                </p>
                <Button variant="secondary" size="large" className="mt-8">
                    <span>Sign Up</span>
                </Button>
            </div>
        </motion.section>
    );
}
