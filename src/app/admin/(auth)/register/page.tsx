"use client";

import Link from "next/link";
import Image from "next/image";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { RegisterFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/lib/validations";
import InputField from "@/app/admin/_components/input-field";
import { useRouter } from "next/navigation";
import { register } from "@/actions/auth.action";
import { toast } from "sonner";

export default function RegisterPage() {
  const registerForm = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: { fullName: "", username: "", password: "" },
  });

  const router = useRouter();

  const isSubmitting = registerForm.formState.isSubmitting;

  const onRegisterFormSubmit = async (values: RegisterFormSchema) => {
    try {
      await register(values);
      router.replace("/");
      toast.success("Your request has sent successfully");
      registerForm.reset();
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

      <Form {...registerForm}>
        <form
          onSubmit={registerForm.handleSubmit(onRegisterFormSubmit)}
          className={"p-8 space-y-6"}
        >
          <InputField
            name={"fullName"}
            control={registerForm.control}
            placeholder={"Enter your full name"}
            disabled={isSubmitting}
          />

          <InputField
            name={"username"}
            control={registerForm.control}
            placeholder={"Enter your username"}
            disabled={isSubmitting}
          />

          <InputField
            type={"password"}
            name={"password"}
            control={registerForm.control}
            placeholder={"Enter your password"}
            disabled={isSubmitting}
          />

          <Button
            disabled={isSubmitting}
            className="bg-[#122866] w-full text-base h-10 hover:bg-[#122866]/75 cursor-pointer"
          >
            Register
          </Button>
          <div className="flex justify-center ">
            <Link href={"/admin/login"} className={"text-[#122866] text-base"}>
              Are you an admin?
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
