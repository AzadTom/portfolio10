"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  {
    text: "Projects",
    link: "#projects",
  },
  {
    text: "About",
    link: "#about",
  },
  {
    text: "Behance",
    link: "https://www.behance.net/itskumarinidhi",
  },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/itskumarinidhi/",
  },
];

export default function NavBar() {
  return (
    <header className="flex items-center justify-between py-5">
      {/* Logo */}
      <Image
        src="/img/sign.svg"
        alt="Nidhi Portfolio logo"
        width={150}
        height={50}
        priority
      />

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 text-base text-slate-700 sm:flex">
        {navLinks.map((item) => (
          <Link
            key={item.text}
            href={item.link}
            className="relative transition after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-slate-700 after:transition-all hover:after:w-full"
          >
            {item.text}
          </Link>
        ))}

        <Link
          href="#contact"
          className="rounded-full bg-[#4585CA] px-5 py-3 text-white transition-all duration-300 hover:-translate-y-1"
        >
          Let's Talk
        </Link>
      </nav>

      {/* Mobile Menu */}
      <MobileNav />
    </header>
  );
}

function MobileNav() {
  return (
    <Sheet>
      {/* Hamburger */}
      <SheetTrigger asChild className="sm:hidden">
        <button
          className="
      flex h-11 w-14 flex-col items-center justify-center gap-1.5
      rounded-full border border-zinc-200 bg-white
      shadow-sm transition-all duration-300
      hover:shadow-md
    "
        >
          <span className="h-[1.5px] w-5 rounded-full bg-zinc-800" />
          <span className="h-[1.5px] w-3 rounded-full bg-zinc-800" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full border-none bg-[#f8f8f6] p-0 [&>button]:hidden"
      >
        <div className="flex h-full flex-col px-8 pb-8 pt-6">
          {/* Top */}
          <div className="flex items-center justify-between">
            <Image src="/img/sign.svg" alt="logo" width={120} height={40} />

            <SheetClose asChild>
              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                <X size={18} />
              </button>
            </SheetClose>
          </div>

          {/* Links */}
          <nav className="mt-16 flex flex-1 flex-col gap-5">
            {navLinks.map((item) => (
              <SheetClose
                asChild
                key={item.text}
                className="flex justify-start"
              >
                <Link
                  href={item.link}
                  className="
                    py-4
                    text-left
                    text-5xl
                    font-medium
                    leading-none
                    tracking-tight
                    text-zinc-900
                    transition-transform
                    duration-200
                    hover:translate-x-1
                  "
                >
                  {item.text}
                </Link>
              </SheetClose>
            ))}
          </nav>

          {/* Bottom Button */}
          <SheetClose asChild>
            <Link
              href="#contact"
              className="
                flex h-14 items-center justify-center
                rounded-full
                bg-[#4585CA]
                text-base
                font-semibold
                text-white
                shadow-lg
              "
            >
              Let's Talk
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
