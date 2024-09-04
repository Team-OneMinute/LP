import type { Metadata } from "next";
import { Iceland } from "next/font/google";
import "./globals.css";

const iceland = Iceland({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UTOPIA",
  description: "UTOPIA is play to earn game on TON.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={iceland.className}>{children}</body>
    </html>
  );
}
