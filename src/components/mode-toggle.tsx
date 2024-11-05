"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dot, LucideIcon, Monitor, MoonStar as Moon, Sun } from "lucide-react";

interface DropdownItemProps {
  type: string;
  label: string;
  Icon: LucideIcon;
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const Item = ({ type, label, Icon }: DropdownItemProps) => (
    <DropdownMenuItem
      onClick={() => setTheme(type)}
      className="justify-between"
    >
      <div className="flex items-center gap-2">
        <Icon width={14} /> {label}
      </div>
      {theme === type && <Dot />}
    </DropdownMenuItem>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Item type="light" label="Light" Icon={Sun} />
        <Item type="dark" label="Dark" Icon={Moon} />
        <Item type="system" label="System" Icon={Monitor} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
