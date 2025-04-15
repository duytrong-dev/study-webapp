'use client';
import { usePathname } from 'next/navigation';
import SideBar from '../sidebar';
import Fab from '../custom/fab';

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    
    const pathname = usePathname()
    const noSidebarRoutes = ['/login', '/register']
    const shouldHideSidebar = noSidebarRoutes.includes(pathname)

    return (
        <>
        { shouldHideSidebar ? (
            <div className='flex flex-1 justify-center items-center h-screen'>
                {children}
            </div>
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