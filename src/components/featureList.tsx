"use client";

import React from "react";
import { FaCheck } from "react-icons/fa6";
import { motion } from "motion/react";

export default function FeatureList() {
    const featureListData = [
        { tittle: "AI-Powered MCQs" },
        { tittle: "Personalized Practice" },
        { tittle: "AI-Powered Insights" },
    ];
    return (
        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs md:text-sm">
            <div className="flex flex-wrap items-center gap-4">
                {featureListData.map((item, idx) => (
                    <div className="flex items-center gap-2" key={idx}>
                        <FaCheck className="text-primary" />
                        <p className="text-muted-foreground">
                            {item.tittle.split(" ").map((w, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                        delay: index * 0.05,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    {w +
                                        (index <
                                        item.tittle.split(" ").length - 1
                                            ? " "
                                            : "")}
                                </motion.span>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
