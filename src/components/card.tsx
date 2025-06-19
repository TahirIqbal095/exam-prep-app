import Image from "next/image";
import React from "react";

export default function Card() {
    const cardData = [
        {
            heading: "Start Solving Mcqs",
            description: "Ai Powered Mcqs taloired to your syllabus",
            "btn-text": "Start",
            "img-url": "/hero-img-1.svg",
        },
        {
            heading: "Review Your Progress",
            description: "Track your performance and identify weak areas",
            "btn-text": "Review",
            "img-url": "/progress.svg",
        },
        {
            heading: "Access Study Materials",
            description: "Get curated notes and resources for better preparation",
            "btn-text": "Explore",
            "img-url": "/study.svg",
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {cardData.map((item, idx) => (
                <div key={idx} className="shadow-aceternity p-4 rounded-xl bg-neutral-100">
                    <Image
                        src={item["img-url"]}
                        width={200}
                        height={200}
                        alt="hero-img"
                        className="mx-auto"
                    />
                    <div className="mt-4">
                        <h3 className="font-bold text-primary">{item.heading}</h3>
                        <p className="text-secondary">{item.description}</p>
                        <button className="mt-2 bg-blue-600 px-3 py-1 text-white w-full rounded-xl shadow active:scale-95 transition duration-150 cursor-pointer">
                            {item["btn-text"]}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
