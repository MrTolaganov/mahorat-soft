import Navbar from "@/components/shared/navbar";
import { ChildProps } from "@/types";
import Footer from "@/components/shared/footer";

export default function RootLayout({ children }: ChildProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
