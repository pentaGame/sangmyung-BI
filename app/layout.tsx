import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대학 성과 대시보드 | 상명대학교",
  description: "상명대학교 대학 통계분석 및 성과관리 대시보드",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
