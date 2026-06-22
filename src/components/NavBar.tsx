'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navLinks = [
  {
    text: 'Projects',
    link: '#projects',
  },
  {
    text: 'About',
    link: '#about',
  },
  {
    text: 'Behance',
    link: 'https://www.behance.net/itskumarinidhi',
  },
  {
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/itskumarinidhi/',
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
      <Sheet>
        {/* Hamburger */}
        <SheetTrigger asChild className="sm:hidden">
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
            <Menu size={20} />
          </button>
        </SheetTrigger>

        {/* Fullscreen Menu */}
        <SheetContent
          side="right"
          className="w-full border-none bg-[#FAF8F5] p-0 [&>button]:hidden"
        >
          <div className="flex h-full flex-col justify-between px-8 py-8">
            {/* Top */}
            <div>
              <div className="flex items-center justify-between">
                <Image
                  src="/img/sign.svg"
                  alt="logo"
                  width={120}
                  height={40}
                />

                {/* Custom Close Button */}
                <SheetClose asChild>
                  <button
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-zinc-200
                    bg-white/80
                    shadow-md
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:rotate-90
                    hover:scale-105
                  "
                  >
                    <X
                      size={18}
                      strokeWidth={1.5}
                      className="text-slate-700"
                    />
                  </button>
                </SheetClose>
              </div>

              {/* Navigation */}
              <nav className="mt-24 flex flex-col">
                {navLinks.map((item) => (
                  <SheetClose asChild key={item.text}>
                    <Link
                      href={item.link}
                      className="
                        border-b border-zinc-200 py-6
                        text-[38px]
                        font-extralight
                        leading-none
                        tracking-tight
                        text-slate-700
                        transition-all
                        duration-300
                        hover:translate-x-2
                      "
                    >
                      {item.text}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </div>

            {/* Bottom */}
            <div className="space-y-8">
              <SheetClose asChild>
                <Link
                  href="#contact"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#4585CA]
                    px-8
                    py-4
                    text-lg
                    font-medium
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Let's Talk
                  <span>→</span>
                </Link>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}