import MobileButton from "./mobile-button";
import SearchBar from "./search-bar";
import TopNavigationRightSide from "./top-navigation-right-side";

export default function TopNavigation() {
    return (
        <div className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200"> 
            <MobileButton/>
            <SearchBar/>
            <TopNavigationRightSide/>
        </div>
    )
}