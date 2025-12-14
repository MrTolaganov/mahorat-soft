import { ChildProps } from "@/types";
import { getCurrentUser } from "@/actions/auth.action";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahorat Soft | Auth",
};

export default async function AdminAuthLayout({ children }: ChildProps) {
  const currentUser = await getCurrentUser();

  if (currentUser) return redirect("/admin");

  return (
    <div className="w-full h-screen flex items-center md:justify-center bg-gray-200">
      {children}
    </div>
  );
}
