import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Login Page",
};

export default function LoginLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
        <main className="container flex justify-center items-center h-screen text-primarycolor-gray1">
            {children}
        </main>
    )
}
