import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinh Tế Chính Trị - Mác Lê Nin",
  description:
    "Hành trình kinh tế Việt Nam qua góc nhìn triết học Mác-Lê Nin, từ khủng hoảng đến thịnh vượng",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
