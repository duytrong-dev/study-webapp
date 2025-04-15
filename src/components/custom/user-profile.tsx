import Image from "next/image";
import { Button } from "../ui/button";

export default function UserProfile() {
    return (
        <div className="flex items-center mb-6 p-2 rounded-lg bg-gray-100">
            <Image className="w-10 h-10 rounded-full cursor-pointer" width={40} height={40} src="/avatar.jpg" alt="User profile"/>
            <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 cursor-pointer">Nguyễn Duy Trọng</p>
                <p className="text-xs text-gray-500">Level 12 • 1,250 XP</p>
            </div>
            <Button className="ml-auto p-1 text-gray-400 rounded-full hover:text-gray-500 hover:bg-gray-100 bg-gray-100 shadow-none">
                <i className="fas fa-moon"></i>
                {/* <i className="fas fa-sun hidden dark:block"></i> */}
            </Button>
        </div>
    )
}