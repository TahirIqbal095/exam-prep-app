import { cn } from "@/lib/utils";
import React from "react";
import Spinner from "./spinner";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger";
    size?: "small" | "medium" | "large";
    loading?: boolean;
    children: React.ReactNode;
};

const baseClasses =
    "flex items-center justify-center gap-4 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none h-12 cursor-pointer rounded-full px-8 text-base transition-transform duration-300 hover:translate-y-[-2px]";

const variantClasses = {
    primary: `${baseClasses} bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg`,
    secondary: `${baseClasses} border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground border-primary/20 hover:border-primary/50`,
    danger: `${baseClasses} bg-red-600 text-white hover:bg-red-700`,
};

const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
};

export default function Button({
    variant = "primary",
    size = "medium",
    loading = false,
    disabled,
    children,
    className = "",
    ...props
}: ButtonProps) {
    const isDisabled = disabled || loading;
    const safeVariant = variantClasses[variant] ? variant : "primary";
    const safeSize = sizeClasses[size] ? size : "medium";
    return (
        <button
            className={cn(
                variantClasses[safeVariant],
                sizeClasses[safeSize],
                className,
            )}
            disabled={isDisabled}
            aria-busy={loading}
            {...props}
        >
            <span className={loading ? "opacity-70" : ""}>{children}</span>
            {loading ? <Spinner height="4" width="8" /> : null}
        </button>
    );
}
