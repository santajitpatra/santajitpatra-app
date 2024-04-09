import { getServerSession, NextAuthOptions, User } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";



export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        const dbUser = await prisma.user.findFirst({
          where: { email: credentials.email },
        });

        //Verify Password here
        //We are going to use a simple === operator
        //In production DB, passwords should be encrypted using something like bcrypt...
        if (dbUser && dbUser.password === credentials.password) {
          const { password, createdAt, id, ...dbUserWithoutPassword } = dbUser;
          return dbUserWithoutPassword as User;
        }

        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};


export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}


export function LoginIsRequiredClient() {
  const session = useSession();
  const router = useRouter();

  if (!session) {
    if (typeof window !== "undefined") {
      router.push("/");
    }
  }

  return null; 
}
