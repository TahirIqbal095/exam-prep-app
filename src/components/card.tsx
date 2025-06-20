import Image from "next/image";
import React from "react";
import Button from "./button";

export default function Card() {
    const cardData = [
        {
            heading: "Master MCQs Effortlessly",
            description:
                "AI-powered questions tailored to your syllabus for smarter practice.",
            "btn-text": "Start",
            "img-url": "/hero-img-1.svg",
        },
        // {
        //     heading: "Review Your Progress",
        //     description: "Track your performance and identify weak areas",
        //     "btn-text": "Review",
        //     "img-url": "/progress.svg",
        // },
        // {
        //     heading: "Access Study Materials",
        //     description: "Get curated notes and resources for better preparation",
        //     "btn-text": "Explore",
        //     "img-url": "/study.svg",
        // },
    ];
    return (
        <div className="mt-6">
            {cardData.map((item, idx) => (
                <div
                    key={idx}
                    className="shadow-aceternity mx-auto max-w-xl rounded-xl p-4"
                >
                    <div className="rounded-xl bg-neutral-100">
                        <Image
                            src={item["img-url"]}
                            width={200}
                            height={200}
                            alt="hero-img"
                            className="mx-auto p-4"
                        />
                    </div>
                    <div className="mt-4 p-1">
                        <h3 className="text-accent-foreground font-bold">
                            {item.heading}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {item.description}
                        </p>
                        <Button
                            variant="primary"
                            size="medium"
                            className="mt-4 w-full"
                        >
                            {item["btn-text"]}
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
