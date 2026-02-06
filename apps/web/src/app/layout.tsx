import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RIP Social - Real Identity. Real Issues. Real Solutions.",
  description:
    "An open-source civic engagement platform where verified citizens discuss real issues, moderated by AI, with direct routes to government action.",
  keywords: ["civic engagement", "democracy", "government", "petitions", "India"],
  authors: [{ name: "Akshaya Parida", url: "https://akshayaparida.com" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
