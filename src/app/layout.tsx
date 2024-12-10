import "./globals.css";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} bg-black scroll-smooth antialiased overflow-x-hidden`}
        >
          {/* <SiteHeader /> */}
          {children}
          <SiteFooter />
        </body>
      </html>
    </ViewTransitions>
  );
}
