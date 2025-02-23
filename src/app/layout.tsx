import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import * as React from "react";
import { ProvidersWithoutTheme } from "~/components/providers/providers-without-theme";
import { ThemeProvider } from "~/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "ByteBash",
  description: "Your way in school's monitoring",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="relative h-dvh bg-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProvidersWithoutTheme>{children}</ProvidersWithoutTheme>
        </ThemeProvider>
      </body>
    </html>
  );
}
