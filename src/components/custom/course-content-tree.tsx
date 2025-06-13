'use client';
import React, { useState } from "react";

const chapters = [
    {
        title: "Chương 1: Giới thiệu Python",
        completed: 3,
        total: 5,
        icon: "fas fa-folder-open",
        lessons: [
            { type: "lesson", title: "Bài 1: Giới thiệu về Python", duration: "15:24", status: "active" },
            { type: "lesson", title: "Bài 2: Cài đặt môi trường", duration: "22:10", status: "completed" },
            { type: "lesson", title: "Bài 3: Chạy chương trình đầu tiên", duration: "18:45", status: "completed" },
            { type: "quiz", title: "Bài kiểm tra 1", duration: "10 câu", status: "" },
            { type: "lesson", title: "Bài 4: Biến và kiểu dữ liệu", duration: "25:30", status: "" },
            { type: "lesson", title: "Bài 5: Toán tử và biểu thức", duration: "20:15", status: "" },
        ],
    },
    {
        title: "Chương 2: Cấu trúc điều khiển",
        completed: 4,
        total: 6,
        icon: "fas fa-folder-open",
        lessons: [
            { type: "lesson", title: "Bài 6: Câu lệnh điều kiện if", duration: "18:20", status: "completed" },
            { type: "lesson", title: "Bài 7: Vòng lặp while", duration: "22:45", status: "completed" },
            { type: "lesson", title: "Bài 8: Vòng lặp for", duration: "25:10", status: "completed" },
            { type: "quiz", title: "Bài kiểm tra 2", duration: "15 câu", status: "completed" },
            { type: "lesson", title: "Bài 9: Câu lệnh break và continue", duration: "15:30", status: "" },
            { type: "lesson", title: "Bài 10: Xử lý ngoại lệ", duration: "20:00", status: "" },
        ],
    },
    {
        title: "Chương 3: Hàm và Module",
        completed: 0,
        total: 5,
        icon: "fas fa-folder",
        lessons: [
            { type: "lesson", title: "Bài 11: Khái niệm về hàm", duration: "25:00", status: "" },
            { type: "lesson", title: "Bài 12: Tham số và giá trị trả về", duration: "30:15", status: "" },
            { type: "lesson", title: "Bài 13: Phạm vi biến", duration: "18:30", status: "" },
            { type: "quiz", title: "Bài kiểm tra 3", duration: "12 câu", status: "" },
            { type: "lesson", title: "Bài 14: Module và package", duration: "22:45", status: "" },
        ],
    },
    {
        title: "Chương 4: Lập trình hướng đối tượng",
        completed: 0,
        total: 4,
        icon: "fas fa-folder",
        lessons: [
            { type: "lesson", title: "Bài 15: Lớp và đối tượng", duration: "30:00", status: "" },
            { type: "lesson", title: "Bài 16: Kế thừa và đa hình", duration: "35:15", status: "" },
            { type: "quiz", title: "Bài kiểm tra 4", duration: "15 câu", status: "" },
            { type: "lesson", title: "Bài 17: Magic methods", duration: "25:30", status: "" },
        ],
    },
];

export default function CourseContentTree() {
    const [openChapter, setOpenChapter] = useState<number | null>(0);

    return (
        <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-gray-800 dark:text-white">Nội dung khóa học</h3>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[700px] overflow-y-auto">
                {chapters.map((chapter, idx) => (
                    <div className="chapter" key={idx}>
                        <div
                            className="chapter-header flex items-center justify-between p-4 cursor-pointer bg-gray-50 dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors"
                            onClick={() => setOpenChapter(openChapter === idx ? null : idx)}
                        >
                            <div className="flex items-center">
                                <i className={`${chapter.icon} text-blue-500 mr-3`}></i>
                                <h4 className="font-medium text-gray-800 dark:text-white">{chapter.title}</h4>
                            </div>
                            <div className="flex items-center">
                                <span className={`text-xs px-2 py-1 rounded-full ${chapter.completed > 0 ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"}`}>
                                    {chapter.completed}/{chapter.total} bài
                                </span>
                                <i
                                    className={`fas fa-chevron-down chapter-toggle ml-3 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${openChapter === idx ? "rotate-180" : ""}`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`chapter-content transition-all duration-300 overflow-hidden ${
                                openChapter === idx ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                            {chapter.lessons.map((lesson, lidx) => (
                                <div
                                    key={lidx}
                                    className={`lesson-item pl-14 pr-4 py-3 flex items-center justify-between ${
                                        lesson.status === "active"
                                            ? "active"
                                            : lesson.status === "completed"
                                            ? "completed"
                                            : ""
                                    } hover:bg-gray-50 dark:hover:bg-dark-700 cursor-pointer transition-colors`}
                                >
                                    <div className="flex items-center">
                                        <i
                                            className={
                                                lesson.type === "quiz"
                                                    ? "fas fa-question-circle text-purple-500 mr-3"
                                                    : "fas fa-play-circle text-blue-500 mr-3"
                                            }
                                        ></i>
                                        <span
                                            className={`lesson-title font-medium ${
                                                lesson.status === "active"
                                                    ? "text-blue-600 dark:text-blue-400"
                                                    : "text-gray-700 dark:text-gray-300"
                                            }`}
                                        >
                                            {lesson.title}
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{lesson.duration}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}