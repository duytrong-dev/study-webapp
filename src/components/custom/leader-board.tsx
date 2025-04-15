import Image from "next/image";

export default function LeaderBoard() {
    return (
        <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Bảng xếp hạng</h2>
            </div>
            <div className="p-4">
                <div className="space-y-3">
                    <div className="leaderboard-item flex items-center p-2 rounded-lg">
                        <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold mr-3">1</span>
                        <Image className="w-8 h-8 rounded-full mr-2" width={32} height={32} src="/avatar.jpg" alt="User"/>
                        <div className="flex-1">
                            <div className="text-sm font-medium">Trần Văn Nam</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">2,450 XP</div>
                        </div>
                        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full dark:bg-green-900 dark:text-green-200">+120</div>
                    </div>
                    <div className="leaderboard-item flex items-center p-2 rounded-lg">
                        <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold mr-3">2</span>
                        <Image className="w-8 h-8 rounded-full mr-2" width={32} height={32} src="/avatar.jpg" alt="User"/>
                        <div className="flex-1">
                            <div className="text-sm font-medium">Lê Thị Hương</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">2,320 XP</div>
                        </div>
                        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full dark:bg-green-900 dark:text-green-200">+95</div>
                    </div>
                    <div className="leaderboard-item you flex items-center p-2 rounded-lg bg-primary-50 dark:bg-primary-900">
                        <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-xs font-bold mr-3">3</span>
                        <Image className="w-8 h-8 rounded-full mr-2" width={32} height={32} src="/avatar.jpg" alt="User"/>
                        <div className="flex-1">
                            <div className="text-sm font-medium">Nguyễn Thị Mai</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">1,250 XP</div>
                        </div>
                        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full dark:bg-green-900 dark:text-green-200">+85</div>
                    </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 text-sm">
                    Xem tất cả
                </button>
            </div>
        </div>
    )
}