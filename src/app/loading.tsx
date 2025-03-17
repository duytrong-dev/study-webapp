export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
            <p className="ml-3 text-lg">Đang tải...</p>
        </div>
    )
}

// loading tự động hiển thị khi chuyển trang