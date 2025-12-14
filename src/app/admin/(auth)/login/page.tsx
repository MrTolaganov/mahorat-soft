"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/lib/validations";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import InputField from "@/app/admin/_components/input-field";
import { login } from "@/actions/auth.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const loginForm = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { username: "", password: "" },
  });

  const router = useRouter();

  const isSubmitting = loginForm.formState.isSubmitting;

  const onLoginFormSubmit = async (values: LoginFormSchema) => {
    try {
      await login(values);
      router.replace("/admin");
      loginForm.reset();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className={"bg-background rounded-xl w-full md:w-1/3 shadow-lg"}>
      <div className="mt-8 flex justify-center">
        <Link href="/">
          <Image
            src={"/images/logo-v2.png"}
            alt={"Mahorat Soft Logo"}
            width={100}
            height={100}
          />
        </Link>
      </div>

      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(onLoginFormSubmit)}
          className={"p-8 space-y-6"}
        >
          <InputField
            name={"username"}
            control={loginForm.control}
            placeholder={"Enter your username"}
            disabled={isSubmitting}
          />

          <InputField
            type={"password"}
            name={"password"}
            control={loginForm.control}
            placeholder={"Enter your password"}
            disabled={isSubmitting}
          />

          <Button
            disabled={isSubmitting}
            className="bg-[#122866] w-full text-base h-10 hover:bg-[#122866]/75 cursor-pointer"
          >
            Login
          </Button>

          <div className="flex justify-center ">
            <Link
              href={"/admin/register"}
              className={"text-[#122866] text-base"}
            >
              Become an admin
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
