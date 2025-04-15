import { Navigations } from "@/constants/sidebar";
import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="space-y-1">
            {
                Navigations?.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link key={item.url} href={item.url} className="sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md">
                            <Icon className="text-primary-500 mr-3 w-5 h-5" />
                            <span>{item.title}</span>
                        </Link>
                    )
                })
            }
        </nav>
    )
}