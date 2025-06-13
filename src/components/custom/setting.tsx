import Link from "next/link";

export default function Setting() {
    return (
        <div className="mt-auto">
            <Link href="/setting" className="sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <i className="fas fa-cog text-primary-500 mr-3"></i>
                <span>Cài đặt</span>
            </Link>
        </div>
    )
}