const efficiencyData = [
    {
        label: "Tập trung",
        percent: 78,
        change: "+12%",
        barColor: "bg-blue-500",
        badgeBg: "bg-blue-100",
        badgeText: "text-blue-800",
        barWidth: "w-[70%]",
    },
    {
        label: "Ghi nhớ",
        percent: 85,
        change: "+8%",
        barColor: "bg-green-500",
        badgeBg: "bg-green-100",
        badgeText: "text-green-800",
        barWidth: "w-[85%]",
    },
    {
        label: "Áp dụng",
        percent: 65,
        change: "+5%",
        barColor: "bg-purple-500",
        badgeBg: "bg-purple-100",
        badgeText: "text-purple-800",
        barWidth: "w-[65%]",
    },
];

export default function LearningEfficiency() {
    return (
        <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Hiệu quả học tập</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {efficiencyData.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs text-gray-500">{item.label}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${item.badgeBg} ${item.badgeText}`}>
                                {item.change}
                            </span>
                        </div>
                        <div className="text-lg font-bold mb-1">{item.percent}%</div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className={`${item.barColor} h-2 rounded-full ${item.barWidth}`}></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-xs text-purple-700">
                    Khả năng ghi nhớ của bạn tốt hơn 92% người dùng khác. Hãy tập trung cải thiện khả năng áp dụng kiến thức.
                </p>
            </div>
        </div>
    );
}