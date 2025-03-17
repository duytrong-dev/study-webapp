import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page",
};

export default function DashBoardLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
        <main className="container flex justify-center items-center h-screen text-primarycolor-gray1">
            {children}
        </main>
    )
}
