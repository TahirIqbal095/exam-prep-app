import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/container";
import Navbar from "@/components/navbar";

const inter = Inter({
    variable: "--font-inter",
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
            <body className={`${inter.className} antialiased bg-gray-100`}>
                <Container>
                    <Navbar />
                </Container>
                {children}
            </body>
        </html>
    );
}
