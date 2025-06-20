import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Container from "@/components/container";
import Navbar from "@/components/navbar";

const outfit = Outfit({
    variable: "--font-outfit",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Jkssb exam Preparation App",
    description:
        "Prepare for JKSSB exams with our comprehensive app, offering mock tests, guidance to help you succeed.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${outfit.className} bg-background relative antialiased`}
            >
                <Container>
                    <Navbar />
                </Container>
                {children}
            </body>
        </html>
    );
}
