"use client";

import { signOut } from "next-auth/react";

type AuthControlsProps = {
  name: string;
  email: string;
};

export function AuthControls({ name, email }: AuthControlsProps) {
  return (
    <div className="auth-controls">
      <span className="auth-user" title={email}>{name}</span>
      <button className="auth-signout" onClick={() => void signOut({ callbackUrl: "/login" })} type="button">
        로그아웃
      </button>
    </div>
  );
}