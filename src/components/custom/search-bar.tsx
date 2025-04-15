export default function SearchBar() {
    return (
        <div className="flex-1 max-w-md ml-4 md:ml-6">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fas fa-search text-gray-400"></i>
                </div>
                <input id="search-input" className="block w-full py-2 pl-10 pr-12 text-sm bg-gray-100 border border-transparent rounded-md focus:bg-white focus:border-primary-300 focus:ring-primary-300 focus:outline-none dark:bg-dark-700 dark:text-white" placeholder="Tìm kiếm khóa học, tài liệu..."/>
            </div>
        </div>
    )
}