import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
      // OAuth authentication providers...
     
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
       
       
      
      }),
      
    
    ],
    secret: "mTiT90Ur/v3ElZC/fnwjGUavKKBqSUFGigPp6pXMOIE=",

    callbacks: {
      redirect({ url, baseUrl   }) {
        if (url.startsWith(baseUrl)) return url
        // Allows relative callback URLs
        else if (url.startsWith("/")) return new URL(url, baseUrl).toString()
        return baseUrl
      }

    }
  

  
  })

  
