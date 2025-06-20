import React from "react";
import { motion } from "motion/react";

export default function Heading() {
    const subHeading =
        "Unlock smarter study strategies and personalized practice with our AI-driven exam prep platform.";
    return (
        <>
            <motion.h1
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="from-foreground via-foreground/90 to-foreground/70 mb-6 flex flex-col gap-2 bg-gradient-to-r bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl lg:text-6xl"
            >
                <span>
                    Crack Your{" "}
                    <span className="font-serif font-light italic">
                        Next Exam
                    </span>
                </span>
                <span>
                    with{" "}
                    <span className="from-primary to-primary/80 bg-gradient-to-b bg-clip-text font-extrabold text-transparent">
                        Confidence
                    </span>
                </span>
            </motion.h1>

            <p className="max-w-xl">
                {subHeading.split(" ").map((word, idx) => (
                    <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: idx * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="text-muted-foreground text-base md:text-lg"
                    >
                        {word +
                            (idx < subHeading.split(" ").length - 1 ? " " : "")}
                    </motion.span>
                ))}
            </p>
        </>
    );
}
