import Link from "next/link";

export default function CreateContentNavigation() {
    return (
        <div className="mb-4">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider ">Tạo nội dung</h3>
            <nav className="mt-2 space-y-1">
                <Link href="#" className="sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md ">
                    <i className="fas fa-plus-circle text-primary-500 mr-3"></i>
                    <span>Khóa học thủ công</span>
                </Link>
                <Link href="/create-course-by-ai" className="sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md ">
                    <i className="fas fa-file-upload text-primary-500 mr-3"></i>
                    <span>Từ file PDF</span>
                </Link>
                <Link href="#" className="sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md ">
                    <i className="fas fa-map-marked-alt text-primary-500 mr-3"></i>
                    <span>Sơ đồ tư duy</span>
                </Link>
                <Link href="#" className="sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md ">
                    <i className="fas fa-layer-group text-primary-500 mr-3"></i>
                    <span>Playlist học tập</span>
                </Link>
            </nav>
        </div>
    )
}