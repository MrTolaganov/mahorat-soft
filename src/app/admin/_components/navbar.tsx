import Link from "next/link";
import { UserCog } from "lucide-react";
import UserBox from "@/app/admin/_components/user-box";
import MobileMenu from "@/app/admin/_components/mobile-menu";
import { getCurrentUser } from "@/actions/auth.action";

export default async function Navbar() {
  const currentUser = await getCurrentUser();

  return (
    <div className={"flex items-center fixed inset-0 h-20 z-50"}>
      <div className="h-full bg-[#122866] md:w-80 border-b flex items-center justify-center">
        <Link
          href="/admin"
          className={"flex items-center gap-x-2 text-background max-md:px-6 "}
        >
          <UserCog className={"size-8 fill-background"} />
          <span className={"max-md:hidden font-bold text-2xl"}>
            Mahorat Soft
          </span>
        </Link>
      </div>
      <div className="h-full flex-1 bg-gray-200 flex items-center justify-end pr-4 md:pr-20 gap-x-3">
        {currentUser && <UserBox currentUser={currentUser} />}
        <MobileMenu />
      </div>
    </div>
  );
}
