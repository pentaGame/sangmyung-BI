"use client";

import { signIn } from "next-auth/react";

export function GoogleSignInButton() {
  return (
    <button className="google-signin" onClick={() => void signIn("google", { callbackUrl: "/" })} type="button">
      <span aria-hidden="true">G</span>
      Google 계정으로 로그인
    </button>
  );
}