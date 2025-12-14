"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/drizzle/schemas/user.schema";
import { useRouter } from "next/navigation";
import { logout } from "@/actions/auth.action";

interface UserBoxProps {
  currentUser: User;
}

export default function UserBox({ currentUser }: UserBoxProps) {
  const router = useRouter();

  const onLogout = async () => {
    await logout();
    router.replace("/admin/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className={"relative cursor-pointer"}>
          <AvatarImage
            src={"/images/admin-avatar.png"}
            alt={"Admin Avatar"}
            className={"absolute -bottom-1 size-11"}
          />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"min-w-60"}>
        <DropdownMenuLabel className={"flex flex-col m-1"}>
          <h4 className={"text-lg font-medium"}>{currentUser.fullName}</h4>
          <p className={"text-base text-muted-foreground"}>
            @{currentUser.username}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className={"text-center text-destructive text-base "}
          onClick={onLogout}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
