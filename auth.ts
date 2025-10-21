import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const nextAuthConfig = NextAuth({
    providers: [GitHub],
    

});

export const { handlers, auth, signIn, signOut } = nextAuthConfig;