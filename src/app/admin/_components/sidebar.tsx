"use client";

import { adminSidebarLinks } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-[#122866] max-md:hidden w-80 text-background ">
      <div className={"sticky top-20"}>
        <div className={"flex flex-col"}>
          {adminSidebarLinks.map(({ label, path, icon: Icon }) => (
            <Link
              key={label}
              href={path}
              className={cn(
                "flex items-center gap-x-3 p-4 hover:bg-background/25",
                path === pathname && "bg-background/25",
              )}
            >
              <Icon className={"size-7"} />
              <span className={"text-lg font-semibold"}>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
