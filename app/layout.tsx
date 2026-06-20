import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foot Taktic | World Cup & Football Analytics",
  description: "Advanced digital platform for football match results, team strategies, and tactical analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased bg-zinc-950 selection:bg-emerald-500 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}