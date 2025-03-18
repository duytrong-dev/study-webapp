import { Calendar, Home, LucideIcon, Search, Settings } from "lucide-react"

export type NavItem = {
    title: string,
    url: string,
    icon: LucideIcon
}

export const NavList: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/study/dashboard',
        icon: Home
    },
    {
        title: 'Explore',
        url: '/study/explore',
        icon: Search
    },
    {
        title: 'My Setting',
        url: '/study/my-setting',
        icon: Settings
    },
    {
        title: 'Course Calendar',
        url: '/study/course-calendar',
        icon: Calendar
    }
]