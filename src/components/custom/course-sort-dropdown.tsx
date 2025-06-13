import Link from "next/link";

export default function SortDropdown()  {
    return (
        <div id="sort-dropdown" className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-800 rounded-md shadow-lg z-10 border dark:border-gray-700">
            <div className="py-1">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700">Mới nhất</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700">Cũ nhất</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700">Tên A-Z</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700">Tên Z-A</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700">Tiến độ cao nhất</Link>
            </div>
        </div>
    );
}