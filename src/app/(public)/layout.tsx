import SideBar from "@/components/sidebar";
import TopNavigation from "@/components/top-navigation";

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-1 h-screen overflow-hidden">
            <SideBar/>
            <div className="flex flex-1 flex-col overflow-hidden">
                <TopNavigation />
                {children}
            </div>
        </div>
    )
}