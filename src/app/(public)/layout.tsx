import SideBar from "@/components/lsm/sidebar";
import TopNavigation from "@/components/lsm/top-navigation";

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-1 h-screen overflow-hidden bg-primarycolor-LightGrayishBlue">
            <SideBar/>
            <div className="flex flex-1 flex-col overflow-hidden">
                <TopNavigation />
                {children}
            </div>
        </div>
    )
}