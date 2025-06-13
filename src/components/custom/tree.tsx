import React from "react";

type Chapter = {
    id: number;
    title: string;
    type: string;
    status: "completed" | "active" | "locked";
    children?: Chapter[];
};

const chapters: Chapter[] = [
    {
        id: 1,
        title: "Giới thiệu Python",
        type: "Giới thiệu",
        status: "completed",
        children: [
            {
                id: 2,
                title: "Lịch sử & Ứng dụng",
                type: "Giới thiệu",
                status: "completed"
            },
            {
                id: 3,
                title: "Cài đặt môi trường",
                type: "Giới thiệu",
                status: "completed"
            }
        ]
    },
    {
        id: 4,
        title: "Biến & Kiểu dữ liệu",
        type: "Cơ bản",
        status: "active",
        children: [
            {
                id: 5,
                title: "Biến",
                type: "Cơ bản",
                status: "active"
            },
            {
                id: 6,
                title: "Kiểu dữ liệu",
                type: "Cơ bản",
                status: "locked"
            }
        ]
    },
    {
        id: 7,
        title: "Câu lệnh điều kiện",
        type: "Cơ bản",
        status: "locked"
    }
];

function renderChapter(chapter: Chapter, isChild = false) {
    return (
        <div key={chapter.id} className="flex flex-col items-center">
            <div
                className={`
                    knowledge-node
                    bg-white dark:bg-dark-700
                    p-4 rounded-lg shadow-md w-64 text-center border-2
                    ${chapter.status === "completed" ? "border-green-500" : ""}
                    ${chapter.status === "active" ? "border-blue-500" : ""}
                    ${chapter.status === "locked" ? "border-gray-300 dark:border-gray-600 opacity-60" : ""}
                    ${isChild ? "mt-2" : ""}
                `}
            >
                <div className="text-base font-semibold text-gray-900 dark:text-white">{chapter.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{chapter.type}</div>
                {chapter.status === "completed" && (
                    <div className="mt-2 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
                        Đã hoàn thành
                    </div>
                )}
                {chapter.status === "active" && (
                    <div className="mt-2 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">
                        Đang học
                    </div>
                )}
                {chapter.status === "locked" && (
                    <div className="mt-2 text-xs bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400 px-2 py-1 rounded-full">
                        Chưa mở khóa
                    </div>
                )}
            </div>
            {/* Render children as binary branches */}
            {chapter.children && (
                <div className="flex flex-row items-start justify-center mt-2 gap-8 relative">
                    {/* Draw lines */}
                    <div className="absolute left-1/2 top-0 h-4 w-0.5 bg-gray-300 dark:bg-gray-600" style={{ transform: "translateX(-50%)" }}></div>
                    <div className="absolute left-1/4 top-4 w-1/4 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                    <div className="absolute right-1/4 top-4 w-1/4 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                    {chapter.children.map(child => (
                        <div key={child.id} className="flex flex-col items-center">
                            {renderChapter(child, true)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Tree() {
    return (
        <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Cây kiến thức khóa học Python</h2>
            </div>
            <div className="p-6">
                <div className="flex flex-col items-center gap-6">
                    {/* Tree visualization with binary branches */}
                    <div className="flex flex-col items-center gap-6">
                        {chapters.map((chapter, idx) => (
                            <React.Fragment key={chapter.id}>
                                {renderChapter(chapter)}
                                {idx < chapters.length - 1 && (
                                    <div className="h-6 w-1 bg-gray-300 dark:bg-gray-600 mx-auto"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <i className="fas fa-save mr-2"></i> Lưu khóa học
                    </button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                        Sơ đồ chương kiến thức sẽ được sử dụng để AI tạo nội dung khóa học phù hợp.
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2 dark:bg-gray-700">
                        <div className="bg-primary-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}