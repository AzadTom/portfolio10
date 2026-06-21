import type { Metadata} from "next";
import { Oswald, Geist, Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LenisProvider from "@/src/components/LenisProvider";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const oswald = Oswald({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nidhi Portfolio",
  description: "Portfolio hero section for Nidhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        oswald.className,
        "font-sans",
        geist.variable,
        openSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
