import { 
    Home, 
    LucideIcon, 
    Book, 
    CalendarDays,
    ListChecks,
    LineChart,
    Users
} from "lucide-react"

export type Navigation = {
    title: string,
    url: string,
    icon: LucideIcon
}

export const Navigations: Navigation[] = [
    {
        title: 'Trang chủ',
        url: '/',
        icon: Home
    },
    {
        title: 'Khóa học',
        url: '/',
        icon: Book
    },
    {
        title: 'Lịch học',
        url: '/',
        icon: CalendarDays
    },
    {
        title: 'Nhiệm vụ',
        url: '/',
        icon: ListChecks
    },
    {
        title: 'Phân tích học tập',
        url: '/',
        icon: LineChart
    },
    {
        title: 'Bạn bè & Thử thách',
        url: '/',
        icon: Users
    },

]
