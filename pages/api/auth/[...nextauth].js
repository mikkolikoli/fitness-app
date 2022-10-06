import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)