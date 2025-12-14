"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { adminSidebarLinks } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild className={"md:hidden cursor-pointer"}>
        <Menu className={"text-[#122866] size-8"} />
      </SheetTrigger>
      <SheetContent side={"left"} className={"bg-[#122866] text-background "}>
             <SheetClose className={'absolute -top-14.5 right-3.5 cursor-pointer'}><X className={'size-9'}/></SheetClose>
        <SheetHeader>
          <SheetTitle />
          <SheetDescription />

          {adminSidebarLinks.map(({ label, path, icon: Icon }) => (
            <SheetClose key={label} asChild>
              <Link
                href={path}
                className={cn(
                  "flex items-center gap-x-3 p-4 hover:bg-background/25",
                  path === pathname && "bg-background/25",
                )}
              >
                <Icon className={"size-7"} />
                <span className={"text-lg font-semibold"}>{label}</span>
              </Link>
            </SheetClose>
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
