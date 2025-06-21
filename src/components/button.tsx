import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
import Spinner from "./spinner";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    children: React.ReactNode;
}

const BASE_CLASSES =
    "whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none rounded-full cursor-pointer select-none";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
    primary:
        "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg hover:translate-y-[-1px] active:translate-y-0 active:shadow-md",
    secondary:
        "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-primary/50 hover:translate-y-[-1px] active:translate-y-0",
} as const;

const SIZE_CLASSES: Record<ButtonSize, string> = {
    small: "h-8 px-3 text-sm",
    medium: "h-10 px-4 text-base",
    large: "h-12 px-6 text-lg",
} as const;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "medium",
            loading = false,
            disabled = false,
            children,
            className,
            type = "button",
            ...props
        },
        ref,
    ) => {
        const isDisabled = disabled || loading;

        return (
            <button
                ref={ref}
                type={type}
                className={cn(
                    BASE_CLASSES,
                    VARIANT_CLASSES[variant],
                    SIZE_CLASSES[size],
                    className,
                )}
                disabled={isDisabled}
                aria-disabled={isDisabled}
                aria-busy={loading}
                {...props}
            >
                {loading && (
                    <Spinner
                        height="4"
                        width="4"
                        className="shrink-0"
                        aria-hidden="true"
                    />
                )}
                <span className={cn(loading && "opacity-80")}>{children}</span>
            </button>
        );
    },
);

Button.displayName = "Button";

export default Button;
