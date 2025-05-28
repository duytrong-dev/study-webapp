import Image from "next/image";

export default function ChallengesSection() {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">Thử thách học tập</h2>
                <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
                    <i className="fas fa-plus mr-1"></i> Tạo thử thách
                </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <!-- Challenge 1 --> */}
                <div className="card-hover bg-white border border-gray-200 rounded-lg overflow-hidden transition duration-300 ease-in-out">
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-medium text-gray-900">Học 5 ngày liên tiếp</h3>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Đang thực hiện</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Học ít nhất 1 giờ mỗi ngày trong 5 ngày liên tiếp</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-1">
                                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-xs text-white">5</div>
                                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-xs text-white">4</div>
                                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-xs text-white">3</div>
                                <div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-white flex items-center justify-center text-xs text-white">2</div>
                                <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-500">1</div>
                            </div>
                            <span className="text-xs text-gray-500">+150 XP</span>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Challenge 2 --> */}
                <div className="card-hover bg-white border border-gray-200 rounded-lg overflow-hidden transition duration-300 ease-in-out">
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-medium text-gray-900">Hoàn thành 3 bài tập Python</h3>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Mới</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Hoàn thành 3 bài tập trong khóa Python cơ bản</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-1">
                                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-xs text-white">3</div>
                                <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-500v>">2</div>
                                <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-500v>">1</div>
                            </div>
                            <span className="text-xs text-gray-500">+100 XP</span>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Challenge 3 --> */}
                <div className="card-hover bg-white border border-gray-200 rounded-lg overflow-hidden transition duration-300 ease-in-out">
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-medium text-gray-900">Học 10 giờ trong tuần</h3>
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Nhóm</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Cùng nhóm học 10 giờ trong tuần này</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="flex -space-x-2 mr-2">
                                    <Image className="w-6 h-6 rounded-full border-2 border-white" width={24} height={24} src="/avatar.jpg" alt="User"/>
                                    <Image className="w-6 h-6 rounded-full border-2 border-white" width={24} height={24} src="/avatar.jpg" alt="User"/>
                                    <Image className="w-6 h-6 rounded-full border-2 border-white" width={24} height={24} src="/avatar.jpg" alt="User"/>
                                </div>
                                <span className="text-xs text-gray-500">3/5 giờ</span>
                            </div>
                            <span className="text-xs text-gray-500">+200 XP</span>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Add Challenge Card --> */}
                <div className="card-hover bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                        <i className="fas fa-plus text-primary-600 text-xl"></i>
                    </div>
                    <h3 className="text-lg font-medium text-gray-700 mb-1">Tạo thử thách</h3>
                    <p className="text-sm text-gray-500 text-center">Cá nhân hoặc cùng bạn bè</p>
                </div>
            </div>
        </div>
    )
}