import { NavList } from "@/constants/Navbar"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function AppSidebar({children} : Readonly<{ children: React.ReactNode }>) {
    return (
        <SidebarProvider className="w-full h-full flex">
                <div className="app-sidebar relative">
                    <Sidebar collapsible="icon" className="relative border-none">
                        <SidebarHeader className="w-full h-36 p-0 flex justify-center">
                            <Link href={'/'}>
                                <Image src="/logo.png" alt="logo" width={70} height={100} />
                            </Link>
                        </SidebarHeader>
                        <SidebarContent className="flex flex-col gap-4 py-6">
                            <SidebarGroup className="w-full py-0 bg-white rounded-xl border border-primarycolor-gray2 shadow-md shadow-primarycolor-gray2 my-6">
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        <SidebarMenuItem className="hover:bg-none">
                                            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground ">
                                                <Avatar className="h-10 w-10 rounded-xl">
                                                    <AvatarImage src={"https://github.com/shadcn.png"} alt={'https://github.com/shadcn.png'} />
                                                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                                </Avatar>
                                                <div className="grid flex-1 text-left text-sm leading-tight">
                                                    <span className="truncate font-semibold">name</span>
                                                    <span className="truncate text-xs">email</span>
                                                </div>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                            <SidebarGroup className="w-full bg-white rounded-2xl border border-primarycolor-gray2 shadow-md shadow-primarycolor-gray2">
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {NavList && NavList.length > 0 && NavList.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton asChild>
                                                    <Link href={item.url}>
                                                        <item.icon />
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </SidebarContent>
                    </Sidebar>
                </div>
                <section className="w-full flex justify-center items-center h-screen text-primarycolor-gray1 overflow-hidden relative">
                    <SidebarTrigger className="absolute left-0 top-1/2"/>
                    {children}
                </section>
        </SidebarProvider>
    )
}  
  