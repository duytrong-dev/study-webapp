import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Đăng nhập",
    description: "Trang đăng nhập",
};

export default function LoginLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
        <main className="flex justify-center items-center">
            {children}
        </main>
    )
}
