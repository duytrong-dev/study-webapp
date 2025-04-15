export default function TopNavigationRightSide() {
    return (
        <div className="flex items-center space-x-4">
            <button className="p-1 text-gray-400 rounded-full hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none relative">
                <i className="fas fa-bell"></i>
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <button className="p-1 text-gray-400 rounded-full hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none relative">
                <i className="fas fa-trophy"></i>
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-yellow-500"></span>
            </button>
            <div className="relative ml-3">
                <div className="flex items-center space-x-2 cursor-pointer" id="user-menu-button">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Xin chào, Trọng</span>
                    <img className="w-8 h-8 rounded-full" src="/avatar.jpg" alt="User profile"/>
                </div>
                {/* <!-- Dropdown menu --> */}
                {/* <div id="user-menu" className="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 dark:bg-dark-800 border dark:border-gray-700">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700">Hồ sơ</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700">Cài đặt</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700">Đăng xuất</a>
                </div> */}
            </div>
        </div>
    )
}