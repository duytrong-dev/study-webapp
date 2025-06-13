import CourseContentTree from "@/components/custom/course-content-tree";
import CourseHeader from "@/components/custom/course-header";
import CourseProgress from "@/components/custom/course-progress";
import CourseTabs from "@/components/custom/course-tabs";
import LessonContent from "@/components/custom/lesson-content";

export default function CoursesId() {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 overflow-auto p-2 transition-colors duration-300 md:p-6">
                <div className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto">
                        <CourseHeader />
                        <CourseProgress />
                        <CourseTabs />
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="w-full lg:w-1/3">
                                <CourseContentTree />
                            </div>
                            <div className="w-full lg:w-2/3">
                                <LessonContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
