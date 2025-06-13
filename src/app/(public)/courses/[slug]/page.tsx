import CourseContentTree from "@/components/custom/course-content-tree";
import CourseProgress from "@/components/custom/course-progress";
import CourseTabs from "@/components/custom/course-tabs";
import LessonContent from "@/components/custom/lesson-content";

export default function CoursesId() {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 overflow-auto p-2 transition-colors duration-300 md:p-6">
                <div className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div>
                                <div className="flex items-center mb-2">
                                    <h1 className="text-2xl font-bold text-primarycolor-blue dark:text-white mr-3">
                                        Lập trình Python cơ bản
                                    </h1>
                                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        Đang học
                                    </span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Học Python từ cơ bản đến nâng cao với các bài tập thực hành
                                </p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 flex items-center">
                                    <i className="fas fa-play mr-2"></i> Tiếp tục học
                                </button>
                            </div>
                        </div>
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
