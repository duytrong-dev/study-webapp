export default function MissionActivity() {
    return (
        <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-medium text-gray-600">Hoạt động gần đây</h2>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="p-4 flex">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-600">Bạn đã hoàn thành nhiệm vụ &quot;Ôn tập ngữ pháp Bài 2&quot;</div>
                                <div className="text-sm text-gray-500 mt-1">Hôm qua lúc 10:30</div>
                            </div>
                        </div>
                        <div className="p-4 flex">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                                <i className="fas fa-play"></i>
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-600">Bạn đã bắt đầu làm nhiệm vụ &quot;Thiết kế giao diện website&quot;</div>
                                <div className="text-sm text-gray-500 mt-1">Hôm qua lúc 14:15</div>
                            </div>
                        </div>
                        <div className="p-4 flex">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4 flex-shrink-0">
                                <i className="fas fa-plus"></i>
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-600">Bạn đã thêm nhiệm vụ &quot;Làm quiz JavaScript&quot;</div>
                                <div className="text-sm text-gray-500 mt-1">2 ngày trước</div>
                            </div>
                        </div>
                        <div className="p-4 flex">
                            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mr-4 flex-shrink-0">
                                <i className="fas fa-share-alt"></i>
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-600">Bạn đã chia sẻ nhiệm vụ &quot;Kiểm tra lỗi dự án nhóm&quot; với Phương Anh</div>
                                <div className="text-sm text-gray-500 mt-1">3 ngày trước</div>
                            </div>
                        </div>
                        <div className="p-4 flex">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4 flex-shrink-0">
                                <i className="fas fa-times"></i>
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-600">Bạn đã bỏ qua thông báo nhiệm vụ &quot;Xem video bài giảng 5&quot;</div>
                                <div className="text-sm text-gray-500 mt-1">4 ngày trước</div>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-3 text-sm font-medium text-center text-primary-600 hover:text-primary-500 border-t border-gray-200">
                        Xem toàn bộ hoạt động
                    </button>
                </div>
            </div>
        </div>
    )
}