import Link from "next/link";

export default function QuickLinks() {
    return (
        <div className="mb-4">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Công cụ học tập</h3>
            <nav className="mt-2 space-y-1">
                <Link href="#" className="sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md">
                    <i className="fas fa-brain text-primary-500 mr-3"></i>
                    <span>Flashcards</span>
                </Link>
                <Link href="#" className="sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md">
                    <i className="fas fa-project-diagram text-primary-500 mr-3"></i>
                    <span>Sơ đồ tư duy</span>
                </Link>
                <Link href="#" className="sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md">
                    <i className="fas fa-stopwatch text-primary-500 mr-3"></i>
                    <span>Pomodoro</span>
                </Link>
                <Link href="#" className="sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md">
                    <i className="fas fa-headphones text-primary-500 mr-3"></i>
                    <span>Nhạc tập trung</span>
                </Link>
            </nav>
        </div>
    )
}