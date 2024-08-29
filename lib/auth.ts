
import { PrismaAdapter } from "@auth/prisma-adapter";

import {NextAuthOptions , type DefaultSession } from "next-auth";
import GitHub from "next-auth/providers/github"
import { db } from "@/lib/db";


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as any,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    // error: "/auth/error",
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },

    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          id: user.id,
        }
      }
    
      const dbUser = await db.user.findUnique({
        where: {
          email: token.email!,
        },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          stripeSubscriptionId: true,
          stripePriceId: true,
        },
      })
    
      if (!dbUser) {
        return token
      }
    
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        stripeSubscriptionId: dbUser.stripeSubscriptionId,
        stripePriceId: dbUser.stripePriceId,
      }
    },
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    })
  ],
  // debug: process.env.NODE_ENV !== "production"
};

