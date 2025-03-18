import { AppSidebar } from "@/components/layout/AppSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Học tập",
    description: "Trang học tập",
};

const StudyLayout = ( {children} : Readonly<{ children: React.ReactNode }> ) => {
    return (
        <main className="container">
            <div className="background hidden md:block absolute top-0 left-0 w-3/4 h-3/4 bg-primarycolor-blue2 transform -rotate-45 -translate-y-[50%] -translate-x-[45%] lg:-translate-y-[35%] lg:-translate-x-[40%] -z-50"> </div>
            <AppSidebar>{children}</AppSidebar>
        </main>
    )
}

export default StudyLayout;
