import type { Metadata } from "next";
import "./globals.css";
import MuiThemeProvider from "@/lib/mui/ThemeRegistry";
import MainLayout from "@/lib/layouts/MainLayout";

export const metadata: Metadata = {
  title: "The Paris Salons",
  description: "THE PARIS SALON | HAIR | SKIN | NAILS | EYELASH | MAKE-UP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <MuiThemeProvider>
          <MainLayout>{children}</MainLayout>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
