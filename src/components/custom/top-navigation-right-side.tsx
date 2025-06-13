'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import NotificationDropdown from "./notification-dropdown-props";

export default function TopNavigationRightSide() {
    const [open, setOpen] = useState(false);
    const [openNotify, setOpenNotify] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Đóng dropdown user khi click ra ngoài
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    // Dữ liệu thông báo mẫu
    const notifications = [
        { id: 1, title: "Chào mừng bạn!", content: "Bạn đã đăng nhập thành công." },
        { id: 2, title: "Cập nhật mới", content: "Khóa học mới đã được thêm vào hệ thống." },
    ];

    return (
        <div className="flex items-center space-x-4 relative">
            <div className="relative">
                <button
                    className="p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none relative hidden lg:block"
                    onClick={() => setOpenNotify((prev) => !prev)}
                >
                    <i className="fas fa-bell"></i>
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
                <NotificationDropdown
                    open={openNotify}
                    onClose={() => setOpenNotify(false)}
                    notifications={notifications}
                />
            </div>
            <button className="p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none relative hidden lg:block">
                <i className="fas fa-trophy"></i>
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-yellow-500"></span>
            </button>
            <div className="relative ml-3" ref={menuRef}>
                <div
                    className="flex items-center space-x-2 cursor-pointer"
                    id="user-menu-button"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <span className="text-sm font-medium text-gray-700 hidden lg:inline-block">Xin chào, Trọng</span>
                    <Image className="w-8 h-8 rounded-full" width={32} height={32} src="/avatar.jpg" alt="User profile" />
                </div>
                {open && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hồ sơ</Link>
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cài đặt</Link>
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Đăng xuất</Link>
                    </div>
                )}
            </div>
        </div>
    )
}