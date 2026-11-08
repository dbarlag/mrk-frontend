import type { Metadata } from "next";
import "@norwegianredcross/designsystem/styles";
import "./globals.css";

export const metadata: Metadata = {
  title: "MRK",
  description: "MRK frontend",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
