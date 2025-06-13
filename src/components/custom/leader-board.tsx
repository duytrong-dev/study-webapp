import Image from "next/image";

const leaderboard = [
    {
        name: "Trần Văn Nam",
        avatar: "/avatar.jpg",
        xp: 2450,
        change: "+120",
        rank: 1,
        bg: "bg-yellow-400",
        you: false,
    },
    {
        name: "Lê Thị Hương",
        avatar: "/avatar.jpg",
        xp: 2320,
        change: "+95",
        rank: 2,
        bg: "bg-gray-300",
        you: false,
    },
    {
        name: "Nguyễn Duy Trọng",
        avatar: "/avatar.jpg",
        xp: 1250,
        change: "+85",
        rank: 3,
        bg: "bg-blue-400",
        you: true,
    },
    {
        name: "Phạm Quốc Dũng",
        avatar: "/avatar.jpg",
        xp: 1100,
        change: "+60",
        rank: 4,
        bg: "bg-green-300",
        you: false,
    },
    {
        name: "Vũ Thảo Linh",
        avatar: "/avatar.jpg",
        xp: 980,
        change: "+40",
        rank: 5,
        bg: "bg-pink-300",
        you: false,
    },
];

export default function LeaderBoard() {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Bảng xếp hạng</h2>
            </div>
            <div className="p-4">
                <div className="space-y-3">
                    {leaderboard.slice(0, 5).map((user, idx) => (
                        <div
                            key={idx}
                            className={`leaderboard-item flex items-center p-2 rounded-lg transition-all duration-200 cursor-pointer 
                                ${user.you ? "bg-primary-50" : "hover:bg-gray-100"}`}
                        >
                            <span className={`w-6 h-6 ${user.bg} rounded-full flex items-center justify-center text-xs font-bold mr-3`}>
                                {user.rank}
                            </span>
                            <Image className="w-8 h-8 rounded-full mr-2" width={32} height={32} src={user.avatar} alt="User" />
                            <div className="flex-1">
                                <div className="text-sm font-medium">{user.name}</div>
                                <div className="text-xs text-gray-500">{user.xp.toLocaleString()} XP</div>
                            </div>
                            <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                {user.change}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm">
                    Xem tất cả
                </button>
            </div>
        </div>
    );
}