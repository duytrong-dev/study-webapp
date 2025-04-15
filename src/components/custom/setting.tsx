import { Settings } from "lucide-react";
import Link from "next/link";

export default function Setting() {
    return (
        <div className="mt-auto">
            <Link href="#" className="sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <Settings className="fas fa-cog text-primary-500 mr-3 w-5 h-5"></Settings>
                <span>Cài đặt</span>
            </Link>
        </div>
    )
}