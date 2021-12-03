import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  //   session: {
  //     jwt: true,
  //   },
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  //   pages: {
  //     signIn: "/login",
  //   },
  // SQL or MongoDB database (or leave empty)
  //   database: process.env.DB,
  //   callbacks: {
  //     session: async (session, user) => {
  //       session.userId = user.sub
  //       return Promise.resolve(session)
  //     },
  //   },
})
