import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import { prismaClient } from "@/lib/prisma.client";

const handler = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        }),
        // GitHubProvider({
        //   clientId: process.env.GITHUB_ID ?? "",
        //   clientSecret: process.env.GITHUB_SECRET ?? ""
        // }),
    ],
  callbacks: {

  async signIn({ user, account, profile }) {
    console.log("Sign-in callback triggered", user);
    const allowedEmails = process.env.NEXT_PUBLIC_ALLOWED_EMAIL?.split(",") ?? [];
    console.log(allowedEmails);
    

    const verifyUser = await prismaClient.user.findUnique({
      where : {
        email : user.email ?? ""
      }
    })
    if (!verifyUser) {
      const newUser = await prismaClient.user.create({
        data : {
          name : user.name ?? "",
          email : user.email ?? "",
          password : "",
        },
        select : {
          id : true,
        }
      })
    }

    if (allowedEmails.includes(user.email ?? "")) {
      return true;
    }
    return false;
  },
  }
    
})

export { handler as GET, handler as POST }