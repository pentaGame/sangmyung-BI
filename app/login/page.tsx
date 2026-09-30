import Image from "next/image";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { GoogleSignInButton } from "@/app/components/google-sign-in-button";
import { authOptions } from "@/lib/auth";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session?.user?.email) {
    redirect("/");
  }

  return (
    <main className="login-shell">
      <section className="login-panel" aria-labelledby="login-title">
        <Link className="login-brand" href="/" aria-label="상명대학교 홈">
          <Image className="login-brand-mark" src="/sangmyung-logo.svg" alt="" width={768} height={1024} />
          <span><strong>상명대학교</strong><small>UNIVERSITY INSIGHT</small></span>
        </Link>
        <div className="login-copy">
          <p className="login-eyebrow">UNIVERSITY INSIGHT</p>
          <h1 id="login-title">통계분석 시스템</h1>
          <p>상명대학교 계정으로 로그인해 주세요.</p>
        </div>
        <GoogleSignInButton />
        <p className="login-notice">인증된 <strong>@smu.ac.kr</strong> 계정만 이용할 수 있습니다.</p>
      </section>
      <footer className="login-footer">상명대학교 · University Insight</footer>
    </main>
  );
}