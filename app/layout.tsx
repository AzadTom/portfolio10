import type { Metadata} from "next";
import { Oswald, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("h-full", "antialiased", oswald.className, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
