'use client';
import { useState } from "react";
import Tree from "@/components/custom/tree";

export default function CreateCourseByAIPage() {
    const [showTree, setShowTree] = useState(false);

    return(
        <div className="flex-1 overflow-auto p-2 transition-colors duration-300 md:p-6">
            <div className="max-w-7xl mx-auto">
                {/* <!-- Page Header --> */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-primarycolor-blue">Tạo khóa học bằng AI</h1>
                        <p className="text-gray-600 dark:text-gray-400">Tải lên tài liệu PDF và để AI phân tích, tạo khóa học tự động</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-dark-700 dark:text-gray-300">
                            <i className="fas fa-history mr-2"></i> Lịch sử tạo khóa học
                        </button>
                    </div>
                </div>
                
                {/* <!-- Main Content Grid --> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* <!-- Left Column - File Upload --> */}
                    <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Tải lên tài liệu</h2>
                        </div>
                        <div className="p-6">
                            {/* <!-- File Upload Area --> */}
                            <div className="file-upload rounded-lg p-8 text-center cursor-pointer mb-6">
                                <div className="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                                    <i className="fas fa-file-pdf text-primary-600 dark:text-primary-300 text-2xl"></i>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Kéo thả file PDF vào đây</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Hoặc nhấn để chọn file từ máy tính</p>
                                <input type="file" className="hidden" accept=".pdf" />
                                <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 focus:outline-none">
                                    <i className="fas fa-upload mr-2"></i> Chọn file
                                </button>
                            </div>
                            
                            {/* <!-- Course Information --> */}
                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tên khóa học</label>
                                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-700 dark:border-gray-600 dark:text-white" placeholder="Nhập tên khóa học"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cấp độ</label>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-700 dark:border-gray-600 dark:text-white">
                                        <option value="">Chọn cấp độ</option>
                                        <option value="beginner">Cơ bản</option>
                                        <option value="intermediate">Trung cấp</option>
                                        <option value="advanced">Nâng cao</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Môn học</label>
                                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-700 dark:border-gray-600 dark:text-white" placeholder="Nhập môn học"/>
                                </div>
                            </div>
                            
                            {/* <!-- Generate Button --> */}
                            <button
                                className="w-full py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                onClick={() => setShowTree(true)}
                            >
                                <i className="fas fa-magic mr-2"></i> Tạo khóa học bằng AI
                            </button>
                        </div>
                    </div>
                    
                    {/* <!-- Right Column - AI Generated Content --> */}
                    <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Kết quả AI tạo ra</h2>
                        </div>
                        <div className="p-6">
                            {!showTree ? (
                                <div className="text-center py-12">
                                    <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-dark-700 rounded-full flex items-center justify-center mb-4">
                                        <i className="fas fa-robot text-gray-400 text-2xl"></i>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Chưa có dữ liệu</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tải lên file PDF và nhấn &quot;Tạo khóa học bằng AI&quot; để bắt đầu</p>
                                </div>
                            ) : (
                                <Tree />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}