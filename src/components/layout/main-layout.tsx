'use client';
import { usePathname } from 'next/navigation';
import SideBar from '../custom/sidebar';
import Fab from '../custom/fab';

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    
    const pathname = usePathname()
    const noSidebarRoutes = ['/login', '/register']
    const shouldHideSidebar = noSidebarRoutes.includes(pathname)

    return (
        <>
        { shouldHideSidebar ? (
            children
        ) : (
            <>
                <Fab />
                <div className="flex flex-1 h-screen overflow-hidden">
                    <SideBar/>
                    {children}
                </div>
            </>
        )
        }
        </>
    )
}