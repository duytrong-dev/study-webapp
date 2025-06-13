const contentOptions = [
    {
        label: "Khóa học thủ công",
        iconBg: "bg-primary-100 dark:bg-primary-900",
        icon: <i className="fas fa-plus text-primary-600 dark:text-primary-300"></i>,
        btnBg: "bg-gray-50 dark:bg-dark-700",
        btnHover: "hover:bg-gray-100 dark:hover:bg-dark-600",
    },
    {
        label: "Từ file PDF",
        iconBg: "bg-green-100 dark:bg-green-900",
        icon: <i className="fas fa-file-pdf text-green-600 dark:text-green-300"></i>,
        btnBg: "bg-gray-50 dark:bg-dark-700",
        btnHover: "hover:bg-gray-100 dark:hover:bg-dark-600",
    },
    {
        label: "Sơ đồ tư duy",
        iconBg: "bg-purple-100 dark:bg-purple-900",
        icon: <i className="fas fa-project-diagram text-purple-600 dark:text-purple-300"></i>,
        btnBg: "bg-gray-50 dark:bg-dark-700",
        btnHover: "hover:bg-gray-100 dark:hover:bg-dark-600",
    },
    {
        label: "Playlist học tập",
        iconBg: "bg-yellow-100 dark:bg-yellow-900",
        icon: <i className="fas fa-layer-group text-yellow-600 dark:text-yellow-300"></i>,
        btnBg: "bg-gray-50 dark:bg-dark-700",
        btnHover: "hover:bg-gray-100 dark:hover:bg-dark-600",
    },
];

export default function CreateContentCard() {
    return (
        <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Tạo nội dung</h2>
            </div>
            <div className="p-4">
                <div className="grid grid-cols-2 gap-3">
                    {contentOptions.map((item, idx) => (
                        <button
                            key={idx}
                            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors ${item.btnBg} ${item.btnHover}`}
                        >
                            <div className={`w-10 h-10 ${item.iconBg} rounded-full flex items-center justify-center mb-2`}>
                                {item.icon}
                            </div>
                            <span className="text-sm text-center">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}