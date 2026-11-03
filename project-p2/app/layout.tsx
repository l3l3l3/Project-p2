
import type { Metadata } from "next";
import Sidebar from "./Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "ตราสารหนี้",
  description: "ระบบจัดการเอกสารตราสารหนี้",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="flex min-h-screen flex-col">
        {/* Header */}
        <header className="site-header">
          <a href="/" className="logo">
            <span>ตราสารหนี้</span>
          </a>
        </header>

        {/* Sidebar ซ้าย + เนื้อหาขวา */}
        <div className="flex flex-1 bg-[#faf8f7]">
        <Sidebar />

          <main className="min-w-0 flex-1">
            {children}
          </main>
        </div>

        {/* Footer */}
        <footer className="site-footer">
          <p>ข้อมูลเพื่อการเผยแพร่เท่านั้น · ข้อความสงวนสิทธิ์</p>
        </footer>
      </body>
    </html>
  );
}
