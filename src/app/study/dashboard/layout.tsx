import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Trang dashboard",
};

const DashBoardLayout = ( {children} : Readonly<{ children: React.ReactNode }> ) => {
    return (
        <section>{children}</section>
    )
}

export default DashBoardLayout;
