'use client';
import CourseCard from "@/components/custom/course-card";
import FilterDropdown from "@/components/custom/course-filter-dropdown";
import SortDropdown from "@/components/custom/course-sort-dropdown";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const courses = [
    {
        iconClass: "fas fa-code",
        bgColor: "bg-gradient-to-r from-blue-500 to-blue-400",
        title: "Lập trình Python cơ bản",
        description: "Học Python từ cơ bản đến nâng cao với các bài tập thực hành",
        progress: 72,
        totalLessons: 20,
        completedLessons: 12,
        href: "/courses/python",
    },  
    {  
        iconClass: "fas fa-language",
        bgColor: "bg-gradient-to-r from-purple-500 to-purple-400",
        title: "Tiếng Nhật N5",
        description: "Học tiếng Nhật trình độ sơ cấp với giáo trình Minna no Nihongo",
        progress: 45,
        totalLessons: 25,
        completedLessons: 8,
        href: "/courses/japanese-n5",
    },  
    {  
        iconClass: "fas fa-laptop-code",
        bgColor: "bg-gradient-to-r from-green-500 to-green-400",
        title: "Thiết kế Web cơ bản",
        description: "HTML, CSS, JavaScript cơ bản cho người mới bắt đầu",
        progress: 28,
        totalLessons: 15,
        completedLessons: 5,
        href: "/courses/web-basic",
    },  
    {  
        iconClass: "fas fa-chart-line",
        bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-400",
        title: "Kinh tế học đại cương",
        description: "Hiểu các nguyên lý cơ bản của kinh tế học vi mô và vĩ mô",
        progress: 15,
        totalLessons: 20,
        completedLessons: 3,
        href: "/courses/economics",
    },  
    {  
        iconClass: "fas fa-atom",
        bgColor: "bg-gradient-to-r from-red-500 to-red-400",
        title: "Vật lý đại cương",
        description: "Các khái niệm cơ bản về cơ học, nhiệt động lực học và điện từ học",
        progress: 90,
        totalLessons: 20,
        completedLessons: 18,
        href: "/courses/physics",
    },  
    {  
        iconClass: "fas fa-dna",
        bgColor: "bg-gradient-to-r from-indigo-500 to-indigo-400",
        title: "Sinh học phân tử",
        description: "Khám phá cấu trúc và chức năng của ADN, ARN và protein",
        progress: 60,
        totalLessons: 20,
        completedLessons: 12,
        href: "/courses/molecular-biology",
    },
];

export default function Courses() {
    const [showFilter, setShowFilter] = useState(false);
    const [showSort, setShowSort] = useState(false);
    const [activeTab, setActiveTab] = useState<"all" | "studying" | "completed">("all");
    const filterRef = useRef<HTMLDivElement>(null);
    const sortRef = useRef<HTMLDivElement>(null);

    // Đóng dropdown khi click ra ngoài
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                filterRef.current &&
                !filterRef.current.contains(event.target as Node) &&
                sortRef.current &&
                !sortRef.current.contains(event.target as Node)
            ) {
                setShowFilter(false);
                setShowSort(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex-1 overflow-auto p-2 transition-colors duration-300 md:p-6">
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="flex-1 overflow-auto p-6 bg-gray-50 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto">
                        
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div>
                                <h1 className="text-2xl font-bold text-primarycolor-blue mb-2">Khóa học của tôi</h1>
                                <p className="text-gray-500">Quản lý và tạo khóa học mới để bắt đầu học tập</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <Button id="create-course-btn" className="px-4 py-2 bg-primarycolor-blue text-white rounded-lg hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300 flex items-center">
                                    <i className="fas fa-plus mr-2"></i> Tạo khóa học mới
                                </Button>
                            </div>
                        </div>
                        
                        <div className="border-b border-gray-200 mb-6">
                            <div className="flex justify-between md:space-x-8 md:justify-start">
                                <button
                                    className={`tab-button py-2 px-1 font-medium text-sm focus:outline-none ${activeTab === "all" ? "active" : "text-gray-500 hover:text-gray-700"}`}
                                    onClick={() => setActiveTab("all")}
                                >
                                    Tất cả khóa học
                                </button>
                                <button
                                    className={`tab-button py-2 px-1 font-medium text-sm focus:outline-none ${activeTab === "studying" ? "active" : "text-gray-500 hover:text-gray-700"}`}
                                    onClick={() => setActiveTab("studying")}
                                >
                                    Đang học
                                </button>
                                <button
                                    className={`tab-button py-2 px-1 font-medium text-sm focus:outline-none ${activeTab === "completed" ? "active" : "text-gray-500 hover:text-gray-700"}`}
                                    onClick={() => setActiveTab("completed")}
                                >
                                    Đã hoàn thành
                                </button>
                            </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div className="mb-4 md:mb-0">
                                <span className="text-sm text-gray-500">Hiển thị 6/12 khóa học</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="relative" ref={filterRef}>
                                    <button
                                        id="filter-button"
                                        className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none"
                                        onClick={() => {
                                            setShowFilter((prev) => !prev);
                                            setShowSort(false);
                                        }}
                                    >
                                        <i className="fas fa-filter text-gray-500 "></i>
                                        <span>Lọc</span>
                                    </button>
                                    {showFilter && <FilterDropdown />}
                                </div>
                                <div className="relative" ref={sortRef}>
                                    <button
                                        id="sort-button"
                                        className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-dark-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none"
                                        onClick={() => {
                                            setShowSort((prev) => !prev);
                                            setShowFilter(false);
                                        }}
                                    >
                                        <i className="fas fa-sort-amount-down text-gray-500 dark:text-gray-400"></i>
                                        <span>Sắp xếp</span>
                                    </button>
                                    {showSort && <SortDropdown />}
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- Courses --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            {courses.map((course, index) => (
                                <CourseCard key={index} {...course} />
                            ))}
                            
                            {/* <!-- Thêm Course--> */}
                            <div className="card-hover bg-gray-50 dark:bg-dark-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-600 transition duration-300 ease-in-out" id="add-course-card">
                                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                                    <i className="fas fa-plus text-primary-600 dark:text-primary-300 text-2xl"></i>
                                </div>
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">Thêm khóa học</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Tạo mới hoặc nhập từ file PDF</p>
                            </div>
                        </div>
                        
                        {/* <!-- Phân trang --> */}
                        <div className="flex justify-center mt-8">
                            <nav className="inline-flex rounded-md shadow">
                                <Link href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:bg-dark-800 dark:border-gray-700 dark:text-gray-400">
                                    <i className="fas fa-chevron-left"></i>
                                </Link>
                                <Link href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-primary-600 dark:bg-dark-800 dark:border-gray-700 dark:text-primary-400">1</Link>
                                <Link href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:bg-dark-800 dark:border-gray-700 dark:text-gray-400">2</Link>
                                <Link href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:bg-dark-800 dark:border-gray-700 dark:text-gray-400">3</Link>
                                <Link href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:bg-dark-800 dark:border-gray-700 dark:text-gray-400">
                                    <i className="fas fa-chevron-right"></i>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
