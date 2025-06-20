import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "relative mx-auto max-w-5xl bg-white px-4 md:px-12",
                className,
            )}
        >
            {children}
        </div>
    );
}
