"use client";

import Link from "next/link";

import { useSpyElem } from "@/hooks/use-spy";
import { usePathname } from "next/navigation";

import { ModeToggle } from "@/components/mode-toggle";

import { cn } from "@/lib/utils";
import ScrollProgressBar from "@/components/common/scroll-progress-bar";
import { Button } from "@/components/ui/button";

import { SiGithub } from "@icons-pack/react-simple-icons";

const navList = [
  { name: "Discaptive", href: "/" },
  { name: "About", href: "/about" },
];

export function Header() {
  const { ref, marginTop } = useSpyElem(65);
  const pathname = usePathname();

  return (
    <nav
      style={{ marginTop }}
      ref={ref}
      className="fixed z-40 flex w-full flex-col items-center justify-center border-b bg-background shadow-sm print:hidden"
    >
      <div className="mt-1 flex h-[64px] w-full max-w-[1200px] items-center justify-between px-4">
        <div className="flex items-center font-medium">
          {navList.map((navItem) => (
            <Link
              href={navItem.href}
              key={navItem.name}
              className={cn(
                "rounded-full px-4 py-1 text-center text-sm transition-colors hover:text-primary",
                (pathname === "/about" && navItem.href === "/about") ||
                  (pathname !== "/about" && navItem.href !== "/about")
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-3">
          <ModeToggle />
          <Button asChild variant="ghost" size="icon">
            <Link href="https://github.com/discaptive" target="_blank">
              <SiGithub className="size-[1.2rem]" />
            </Link>
          </Button>
        </div>
      </div>

      <ScrollProgressBar />
    </nav>
  );
}