This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Google OAuth Setup

1. In Google Cloud Console, configure the OAuth consent screen and create an OAuth client ID for a Web application.
2. Add `http://localhost:3000` as an authorized JavaScript origin and `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI. Add the production origin and callback URI when deploying.
3. Copy `.env.example` to `.env.local`, then set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` from the OAuth client. Generate `NEXTAUTH_SECRET` with `openssl rand -base64 32`.
4. Start the app with `npm run dev` and sign in with a verified `@smu.ac.kr` Google account.

The OAuth callback rejects accounts unless Google confirms the email is verified and its domain is exactly `smu.ac.kr`. Sessions use JWTs, so no database is required for this initial setup. Google Workspace administrators may need to allow the OAuth app for school accounts.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
