import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinh tế thị trường Việt Nam - Góc nhìn từ dữ liệu và thực tiễn",
  description:
    "Hành trình kinh tế Việt Nam qua góc nhìn triết học Mác-Lê Nin, từ khủng hoảng đến thịnh vượng",
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
