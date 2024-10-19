"use client";

import * as React from "react";
import { Dot, LucideIcon, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

interface DropdownItemProps {
  t: string;
  label: string;
  Icon: LucideIcon;
}

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const Item = ({ t, Icon, label }: DropdownItemProps) => (
    <DropdownMenuItem onClick={() => setTheme(t)} className="justify-between">
      <div className="flex items-center gap-2">
        <Icon width={14} /> {label}
      </div>
      {theme === t && <Dot />}
    </DropdownMenuItem>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus-visible:ring-transparent" asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Item t="light" label="Light" Icon={Sun} />
        <Item t="dark" label="Dark" Icon={Moon} />
        <Item t="system" label="System" Icon={Monitor} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
