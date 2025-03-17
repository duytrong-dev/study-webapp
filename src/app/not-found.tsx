export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404 - Không tìm thấy trang</h1>
            <p className="mt-2">Trang bạn đang tìm kiếm không tồn tại.</p>
            <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Quay về trang chủ</a>
        </div>
    )
}

//custom trang 404