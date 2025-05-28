
import TopNavigation from "@/components/top-navigation";
import CoursesSection from "@/components/custom/courses-section";

export default function Courses() {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <TopNavigation/>
            <div className="flex-1 overflow-auto p-2 transition-colors duration-300 md:p-6">
                <CoursesSection/>
            </div>
        </div>
    )
}
