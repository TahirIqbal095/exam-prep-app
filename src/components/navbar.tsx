"use client";

import React, { useState } from "react";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";

export default function Navbar() {
    const navItems = [
        { title: "About", href: "/about" },
        { title: "Career", href: "/career" },
        { title: "Test Series", href: "/tests" },
    ];

    const [hovered, setHovered] = useState<number | null>(null);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const { scrollY } = useScroll();
    const width = useTransform(scrollY, [0, 100], ["50%", "40%"]);
    const y = useTransform(scrollY, [0, 100], [0, 10]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <Container>
            <motion.nav
                style={{
                    boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
                    width,
                    y,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-5xl items-center justify-between rounded-full bg-white px-3 py-2"
            >
                <Image
                    className="h-10 w-10 rounded-full"
                    width={100}
                    height={100}
                    alt="avatar"
                    src={"/avatar.png"}
                />

                <div className="flex items-center gap-2">
                    {navItems.map((item, idx) => (
                        <Link
                            className="relative px-2 py-1 text-sm"
                            key={idx}
                            href={item.href}
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {hovered === idx && (
                                <motion.span
                                    layoutId={`hovered-span`}
                                    className="absolute inset-0 h-full w-full rounded-md bg-neutral-100"
                                />
                            )}
                            <span className="relative z-10">{item.title}</span>
                        </Link>
                    ))}
                </div>
            </motion.nav>
        </Container>
    );
}
