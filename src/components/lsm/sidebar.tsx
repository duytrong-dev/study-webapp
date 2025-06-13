import UserProfile from "../custom/user-profile";
import Navigation from "../custom/navigation";
import Setting from "../custom/setting";
import Logo from "../custom/logo";
import Divider from "../custom/divider";
import QuickLinksNavigation from "../custom/quick-links-navigation";
import CreateContentNavigation from "../custom/create-content-navigation";
export default function SideBar() {
    return (
        <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64 bg-white border-gray-200  transition-colors duration-300">
                <Logo/>
                <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto border-r border-t">
                    <UserProfile/>
                    <Navigation/>
                    <Divider/>
                    <QuickLinksNavigation/>
                    <Divider/>
                    <CreateContentNavigation/>
                    <Divider/>
                    <Setting/>
                </div>
            </div>
        </div>
    )
}