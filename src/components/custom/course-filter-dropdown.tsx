export default function FilterDropdown () {
    return (
        <div id="filter-dropdown" className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
            <div className="py-1">
                <div className="px-4 py-2 text-sm text-gray-700 ">Loại khóa học</div>
                <div className="px-4 py-1">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-500" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700 ">Tự tạo</span>
                    </label>
                </div>
                <div className="px-4 py-1">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-500" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700 ">Hệ thống</span>
                    </label>
                </div>
                <div className="px-4 py-2 text-sm text-gray-700 ">Trạng thái</div>
                <div className="px-4 py-1">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-500" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700 ">Đang học</span>
                    </label>
                </div>
                <div className="px-4 py-1">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-500" />
                        <span className="ml-2 text-sm text-gray-700 ">Chưa bắt đầu</span>
                    </label>
                </div>
                <div className="px-4 py-1">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-500" />
                        <span className="ml-2 text-sm text-gray-700 ">Đã hoàn thành</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
