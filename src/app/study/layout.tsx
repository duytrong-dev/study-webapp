import Sidebar from "@/components/layout/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Học tập",
    description: "Trang học tập",
};

const StudyLayout = ( {children} : Readonly<{ children: React.ReactNode }> ) => {
    return (
        <main className="flex w-full h-full justify-center items-center bg-primarycolor-gray3">
            <div className="background hidden md:block absolute top-0 left-0 w-3/4 h-3/4 bg-primarycolor-blue2 transform -rotate-45 -translate-y-[50%] -translate-x-[45%] lg:-translate-y-[35%] lg:-translate-x-[40%] -z-50"> </div>
            <Sidebar>{children}</Sidebar>
        </main>
    )
}

export default StudyLayout;
