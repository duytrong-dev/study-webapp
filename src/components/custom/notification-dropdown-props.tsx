import { useEffect, useRef } from "react";

interface NotificationDropdownProps {
    open: boolean;
    onClose: () => void;
    notifications: { id: number; title: string; content: string; read?: boolean }[];
}

export default function NotificationDropdown({ open, onClose, notifications }: NotificationDropdownProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClose();
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div ref={ref} className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-50 border top-full">
            <div className="px-4 py-2 font-semibold text-gray-700 border-b">Thông báo</div>
            {notifications.length === 0 ? (
                <div className="px-4 py-6 text-center text-gray-400 text-sm">Không có thông báo mới</div>
            ) : (
                notifications.map(n => (
                    <div
                        key={n.id}
                        className={`px-4 py-3 border-b last:border-b-0 ${n.read ? "bg-gray-50" : "bg-blue-50"}`}
                    >
                        <div className="font-medium text-gray-800">{n.title}</div>
                        <div className="text-xs text-gray-500">{n.content}</div>
                    </div>
                ))
            )}
        </div>
    );
}