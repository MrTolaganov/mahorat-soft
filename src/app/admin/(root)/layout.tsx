import { ChildProps } from "@/types";
import Navbar from "@/app/admin/_components/navbar";
import Sidebar from "@/app/admin/_components/sidebar";
import { getCurrentUser } from "@/actions/auth.action";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: ChildProps) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/admin/login");

  return (
    <div>
      <Navbar />
      <div className={"flex"}>
        <Sidebar />
        <div className={"flex-1 mt-20 min-h-[calc(100vh-80px)]"}>
          {children}
        </div>
      </div>
    </div>
  );
}
