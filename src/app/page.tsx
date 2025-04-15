import TopNavigation from "@/components/custom/top-navigation";
import WellcomeBanner from "@/components/custom/wellcome-banner";

export default function Home() {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <TopNavigation/>
            <div className="flex-1 overflow-auto p-6 transition-colors duration-300">
                <WellcomeBanner/>
            </div>
        </div>
    )
}
