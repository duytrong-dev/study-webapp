import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register Page",
};

export default function RegisterLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
        <main className="container flex justify-center items-center h-screen text-primarycolor-gray1">
            {children}
        </main>
    )
}
