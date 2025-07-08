
import NextAuth from 'next-auth';
import LinkedInProvider from 'next-auth/providers/linkedin';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Add your own logic here to validate credentials
        // For example, query your database
        if (credentials?.email === 'test@example.com' && credentials?.password === 'password') {
          return { id: '1', name: 'Test User', email: 'test@example.com' };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
};

export const { GET, POST } = NextAuth(authOptions);
