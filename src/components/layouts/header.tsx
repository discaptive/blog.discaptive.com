"use client";

import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";

export default function Header() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <header className="fixed z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden">
      <div className="container items-center flex h-16 max-w-6xl justify-between px-8">
        <Button variant="link" className="px-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              className={`w-9 h-9 ${isDarkMode ? "filter invert" : ""}`}
              src={"/logo.png"}
              alt={"Logo"}
              width={256}
              height={256}
            />
            <span className="hidden text-base font-medium sm:inline-block">
              Discaptive
            </span>
          </Link>
        </Button>

        <div className="flex items-center">
          <Button variant="link">
            <Link href="/about" className="font-normal">
              About
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href="https://github.com/discaptive" target="_blank">
              <SiGithub />
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
