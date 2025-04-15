import UserProfile from "./user-profile";
import Navigation from "./navigation";
// import Divider from "./divider";
import Setting from "./setting";
import Logo from "./logo";
// import QuickLinks from "./quick-links";
// import CreateContent from "./create-content";
export default function SideBar() {
    return (
        <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64 bg-white border-gray-200  transition-colors duration-300">
                <Logo/>
                <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto border-r">
                    <UserProfile/>
                    <Navigation/>
                    {/* <Divider/>
                    <QuickLinks/>
                    <Divider/>
                    <CreateContent/> */}
                    {/* <Divider/> */}
                    <Setting/>
                </div>
            </div>
        </div>
    )
}