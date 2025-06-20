import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function FeatureList() {
    return (
        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-2">
                <FaCheck className="text-primary inline-block" />
                <p className="text-muted-foreground">AI-Powered MCQs</p>
            </div>
            <div className="flex items-center gap-2">
                <FaCheck className="text-primary inline-block" />
                <p className="text-muted-foreground">Personalized Practice</p>
            </div>
            <div className="items-cente flex gap-2">
                <FaCheck className="text-primary inline-block" />
                <p className="text-muted-foreground">AI-Powered Insights</p>
            </div>
        </div>
    );
}
