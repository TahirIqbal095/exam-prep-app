import NextAuth from "next-auth";
import { authConfig } from "../auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
// import bcrypt from "bcrypt";

async function getUserByEmail(email: string) {
    // Implement your user fetching logic here
    // This is a placeholder function
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { id: "123", email, password: "hashedPassword" };
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({
                        email: z.string().email(),
                        password: z.string().min(6),
                    })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUserByEmail(email);

                    if (!user) {
                        return null;
                    }

                    const passwordMatch = password === "hashedPassword"; // for now

                    if (passwordMatch) return user;
                }

                console.log("Invalid credentials", parsedCredentials.error);
                return null;
            },
        }),
    ],
});
