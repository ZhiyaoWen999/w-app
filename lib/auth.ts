import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    })
  ],
}

export const handlers = NextAuth(authOptions)