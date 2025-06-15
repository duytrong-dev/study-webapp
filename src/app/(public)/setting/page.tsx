export default function Setting() {
    return (
        <div className="flex-1 overflow-auto p-2 transition-colors duration-300 md:p-6">
            <div className="max-w-7xl mx-auto"> 

                <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm p-6 mb-6"> 
                    <div className="flex items-center justify-between flex-wrap"> 
                        <div> 
                            <h2 className="text-2xl font-bold text-primarycolor-blue dark:text-gray-100 mb-2">Cài đặt cá nhân</h2> 
                            <p className="text-gray-600 dark:text-gray-400">Quản lý tài khoản và tùy chỉnh trải nghiệm học tập</p> 
                        </div> 
                        <div className="mt-4 md:mt-0"> 
                            <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"> 
                                <i className="fas fa-save mr-2"></i>Lưu thay đổi 
                            </button> 
                        </div> 
                    </div> 
                </div> 
                 
                <div className="grid grid-cols-1"> 
                     
                    <div className="col-span-1"> 
                        <div className="space-y-6"> 
                            {/* <!-- Personal Profile -->  */}
                            <div id="profile" className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden"> 
                                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700"> 
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white"> 
                                        <i className="fas fa-user-circle text-primary-500 mr-2"></i> 
                                        Hồ sơ cá nhân 
                                    </h3> 
                                </div> 
                                <div className="p-6"> 
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
                                        {/* <!-- Avatar Upload -->  */}
                                        <div className="md:col-span-1 flex justify-center"> 
                                            <div className="relative"> 
                                                <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-primary-500 dark:border-primary-400"> 
                                                    <img id="avatar-preview" src="/user-1.jpg" alt="Avatar" className="w-full h-full object-cover"/> 
                                                </div> 
                                            </div> 
                                        </div> 
                                         
                                        {/* <!-- Profile Form -->  */}
                                        <div className="md:col-span-2"> 
                                            <div className="space-y-4"> 
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                                                    <div> 
                                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Họ và tên</label> 
                                                        <input type="text" value="Nguyễn Duy Trọng" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none"/> 
                                                    </div> 
                                                    <div> 
                                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label> 
                                                        <input type="email" value="trongnguyen@example.com" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none"/> 
                                                    </div> 
                                                </div> 
                                                 
                                                <div> 
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Số điện thoại</label> 
                                                    <div className="relative"> 
                                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> 
                                                            <span className="text-gray-500 dark:text-gray-400">+84</span> 
                                                        </div> 
                                                        <input type="tel" value="098765432" className="pl-16 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none"/> 
                                                    </div> 
                                                </div> 
                                                 
                                                <div> 
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ngày sinh</label> 
                                                    <input type="date" value="2004-11-26" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none"/> 
                                                </div> 
                                                 
                                                <div> 
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Giới thiệu bản thân</label> 
                                                    <textarea className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none bio-textarea">Sinh viên năm 3 ngành Công nghệ thông tin tại Đại học CNTT - TT Việt Hàn thuộc Đại học Đà Nẵng. Mong muốn trở thành một lập trình viên full-stack chuyên nghiệp.</textarea> 
                                                </div> 
                                            </div> 
                                        </div> 
                                    </div> 
                                </div> 
                            </div> 
                             
                            {/* <!-- Account & Security -->  */}
                            <div id="account" className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden"> 
                                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700"> 
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white"> 
                                        <i className="fas fa-key text-blue-500 mr-2"></i> 
                                        Tài khoản & Bảo mật 
                                    </h3> 
                                </div> 
                                <div className="p-6"> 
                                    <div className="space-y-5"> 
                                        {/* <!-- Password Change -->  */}
                                        <div className="setting-card bg-white dark:bg-dark-700 rounded-xl p-5"> 
                                            <h4 className="font-medium text-lg mb-4 flex items-center"> 
                                                <i className="fas fa-lock text-blue-500 mr-3"></i> 
                                                Thay đổi mật khẩu 
                                            </h4> 
                                            <div className="space-y-4"> 
                                                <div> 
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mật khẩu hiện tại</label> 
                                                    <div className="relative"> 
                                                        <input type="password" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none pr-10" /> 
                                                        <i className="fas fa-eye text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"></i> 
                                                    </div> 
                                                </div> 
                                                <div> 
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mật khẩu mới</label> 
                                                    <div className="relative"> 
                                                        <input type="password" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none pr-10" /> 
                                                        <i className="fas fa-eye text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"></i> 
                                                    </div> 
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Mật khẩu phải có ít nhất 8 ký tự và bao gồm chữ cái và số</p> 
                                                </div> 
                                                <div> 
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Xác nhận mật khẩu mới</label> 
                                                    <div className="relative"> 
                                                        <input type="password" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none pr-10"/> 
                                                        <i className="fas fa-eye text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"></i> 
                                                    </div> 
                                                </div> 
                                                <div className="flex justify-end"> 
                                                    <button className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"> 
                                                        Cập nhật mật khẩu 
                                                    </button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div> 
                                </div> 
                            </div> 
                             
                            {/* <!-- Learning Preferences -->  */}
                            <div id="preferences" className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden"> 
                                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700"> 
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white"> 
                                        <i className="fas fa-cog text-yellow-500 mr-2"></i> 
                                        Tùy chỉnh học tập 
                                    </h3> 
                                </div> 
                                <div className="p-6"> 
                                    <div className="space-y-6"> 
                                        {/* <!-- Pomodoro Settings -->  */}
                                        <div className="setting-card bg-white dark:bg-dark-700 rounded-lg p-5"> 
                                            <div className="flex justify-between items-start"> 
                                                <div> 
                                                    <h4 className="font-medium text-lg mb-1 flex items-center"> 
                                                        <i className="fas fa-stopwatch text-red-500 mr-3"></i> 
                                                        Thiết lập Pomodoro 
                                                    </h4> 
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">Tùy chỉnh thời gian học tập và nghỉ ngơi</p> 
                                                </div> 
                                                {/* <!-- Toggle Switch -->  */}
                                                <div className="flex items-center"> 
                                                    <div className="relative inline-block w-10 mr-2 align-middle select-none"> 
                                                        <input type="checkbox" id="pomodoro-toggle" className="toggle-checkbox hidden" checked /> 
                                                        <label htmlFor="pomodoro-toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer transition-colors"> 
                                                            <span className="h-4 w-5 block mt-0.5 ml-0.5 bg-white rounded-full shadow-sm transform transition-transform duration-200 ease-in-out"></span> 
                                                        </label> 
                                                    </div> 
                                                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">BẬT</span> 
                                                </div> 
                                            </div> 
                                             
                                            <div className="mt-4 grid grid-cols-2 gap-4"> 
                                                <div> 
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Thời gian học (phút)</label> 
                                                    <select className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none"> 
                                                        <option>15</option> 
                                                        <option selected>25</option> 
                                                        <option>35</option> 
                                                        <option>45</option> 
                                                    </select> 
                                                </div> 
                                                <div> 
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Thời gian nghỉ (phút)</label> 
                                                    <select className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none"> 
                                                        <option>5</option> 
                                                        <option selected>10</option> 
                                                        <option>15</option> 
                                                        <option>20</option> 
                                                    </select> 
                                                </div> 
                                                <div> 
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Chu kỳ dài sau</label> 
                                                    <div className="relative"> 
                                                        <input type="number" value="4" min="1" max="10" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none"/> 
                                                    </div> 
                                                </div> 
                                                <div> 
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nghỉ dài (phút)</label> 
                                                    <div className="relative"> 
                                                        <input type="number" value="20" min="10" max="60" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none"/> 
                                                    </div> 
                                                </div> 
                                            </div> 
                                        </div> 
                                         
                                        {/* <!-- Theme & Customization -->  */}
                                        <div className="setting-card bg-white dark:bg-dark-700 rounded-lg p-5"> 
                                            <h4 className="font-medium text-lg mb-4 flex items-center"> 
                                                <i className="fas fa-palette text-purple-500 mr-3"></i> 
                                                Giao diện & Trải nghiệm 
                                            </h4> 
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                                                <div> 
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Chủ đề</label> 
                                                    <select className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none"> 
                                                        <option selected value="system">Theo hệ thống</option> 
                                                        <option value="light">Sáng</option> 
                                                        <option value="dark">Tối</option> 
                                                    </select> 
                                                </div> 
                                                <div> 
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Màu chủ đề</label> 
                                                    <div className="flex items-center space-x-2"> 
                                                        <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer border-2 border-blue-700"></div> 
                                                        <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer"></div> 
                                                        <div className="w-8 h-8 rounded-full bg-purple-500 cursor-pointer"></div> 
                                                        <div className="w-8 h-8 rounded-full bg-indigo-500 cursor-pointer"></div> 
                                                        <div className="w-8 h-8 rounded-full bg-teal-500 cursor-pointer"></div> 
                                                    </div> 
                                                </div> 
                                            </div> 
                                        </div> 

                                    </div> 
                                </div> 
                            </div> 
                             
                            {/* <!-- Privacy Settings -->  */}
                            <div id="privacy" className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden"> 
                                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700"> 
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white"> 
                                        <i className="fas fa-lock text-red-500 mr-2"></i> 
                                        Riêng tư & Bảo mật 
                                    </h3> 
                                </div> 
                                <div className="p-6"> 
                                    <div className="space-y-5"> 
                                        <div className="bg-red-50 dark:bg-red-100/10 border border-red-100 dark:border-red-800 p-4 rounded-lg mb-6"> 
                                            <div className="flex items-start"> 
                                                <i className="fas fa-exclamation-circle text-red-500 mr-3 text-xl mt-0.5"></i> 
                                                <div> 
                                                    <h4 className="font-medium text-red-800 dark:text-red-400">Quản lý Quyền riêng tư</h4> 
                                                    <p className="text-sm text-red-600/80 dark:text-red-400/90 mt-1"> 
                                                        Kiểm soát cách thông tin của bạn được chia sẻ trong hệ thống 
                                                    </p> 
                                                </div> 
                                            </div> 
                                        </div> 
                                         
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5"> 
                                            {/* <!-- Visibility Settings -->  */}
                                            <div className="setting-card bg-white dark:bg-dark-700 rounded-lg p-5"> 
                                                <h4 className="font-medium text-lg mb-4 flex items-center"> 
                                                    <i className="fas fa-eye text-gray-600 dark:text-gray-300 mr-3"></i> 
                                                    Quyền hiển thị 
                                                </h4> 
                                                <div className="space-y-4"> 
                                                    <div> 
                                                        <div className="flex justify-between"> 
                                                            <div> 
                                                                <h5 className="font-medium">Hồ sơ cá nhân</h5> 
                                                                <p className="text-sm text-gray-600 dark:text-gray-400">Ai có thể xem hồ sơ của bạn</p> 
                                                            </div> 
                                                            <select className="text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1 focus:ring-2 focus:ring-primary-500 focus:outline-none"> 
                                                                <option>Chỉ mình tôi</option> 
                                                                <option selected>Bạn học</option> 
                                                                <option>Công khai</option> 
                                                            </select> 
                                                        </div> 
                                                    </div> 
                                                     
                                                    <div className="pt-3 border-t dark:border-gray-700"> 
                                                        <div className="flex justify-between"> 
                                                            <div> 
                                                                <h5 className="font-medium">Hoạt động học tập</h5> 
                                                                <p className="text-sm text-gray-600 dark:text-gray-400">Ai có thể xem bạn đang học</p> 
                                                            </div> 
                                                            <select className="text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1 focus:ring-2 focus:ring-primary-500 focus:outline-none"> 
                                                                <option>Chỉ mình tôi</option> 
                                                                <option selected>Bạn bè</option> 
                                                                <option>Bạn học</option> 
                                                            </select> 
                                                        </div> 
                                                    </div> 
                                                </div> 
                                            </div> 
                                             
                                            {/* <!-- Activity Privacy -->  */}
                                            <div className="setting-card bg-white dark:bg-dark-700 rounded-lg p-5"> 
                                                <h4 className="font-medium text-lg mb-4 flex items-center"> 
                                                    <i className="fas fa-shield-alt text-blue-500 mr-3"></i> 
                                                    Thiết lập riêng tư 
                                                </h4> 
                                                <div className="space-y-4"> 
                                                    <div> 
                                                        <div className="flex justify-between"> 
                                                            <div> 
                                                                <h5 className="font-medium">Khoá học của tôi</h5> 
                                                                <p className="text-sm text-gray-600 dark:text-gray-400">Ai có thể xem khoá học bạn đang học</p> 
                                                            </div> 
                                                            <select className="text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1 focus:ring-2 focus:ring-primary-500 focus:outline-none"> 
                                                                <option>Chỉ mình tôi</option> 
                                                                <option selected>Bạn học</option> 
                                                                <option>Công khai</option> 
                                                            </select> 
                                                        </div> 
                                                    </div> 
                                                     
                                                    <div className="pt-3 border-t dark:border-gray-700"> 
                                                        <div className="flex justify-between"> 
                                                            <div> 
                                                                <h5 className="font-medium">Thành tích học tập</h5> 
                                                                <p className="text-sm text-gray-600 dark:text-gray-400">Ai có thể xem thành tích của bạn</p> 
                                                            </div> 
                                                            <select className="text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1 focus:ring-2 focus:ring-primary-500 focus:outline-none"> 
                                                                <option>Chỉ mình tôi</option> 
                                                                <option selected>Bạn bè</option> 
                                                                <option>Công khai</option> 
                                                            </select> 
                                                        </div> 
                                                    </div> 
                                                </div> 
                                            </div> 
                                        </div> 
                                         
                                        {/* <!-- Data Export -->  */}
                                        <div className="setting-card bg-white dark:bg-dark-700 rounded-lg p-5"> 
                                            <div className="flex justify-between items-start"> 
                                                <div> 
                                                    <h4 className="font-medium text-lg mb-2 flex items-center"> 
                                                        <i className="fas fa-cloud-download-alt text-indigo-500 mr-3"></i> 
                                                        Xuất dữ liệu học tập 
                                                    </h4> 
                                                    <p className="text-sm text-gray-600 dark:text-gray-400"> 
                                                        Tải về tất cả dữ liệu bao gồm khoá học, tài liệu và thành tích của bạn dưới dạng zip 
                                                    </p> 
                                                </div> 
                                                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors whitespace-nowrap"> 
                                                    Xuất dữ liệu 
                                                </button> 
                                            </div> 
                                        </div> 
                                         
                                        {/* <!-- Account Deletion -->  */}
                                        <div className="setting-card bg-white dark:bg-dark-700 rounded-lg p-5 border border-red-200 dark:border-red-900"> 
                                            <div> 
                                                <h4 className="font-medium text-lg mb-2 flex items-center text-red-600 dark:text-red-400"> 
                                                    <i className="fas fa-exclamation-triangle mr-3"></i> 
                                                    Xoá tài khoản 
                                                </h4> 
                                                <p className="text-sm text-red-600/70 dark:text-red-400/90"> 
                                                    Caution: Account deletion is permanent. All your data including courses, achievements will be deleted immediately. 
                                                </p> 
                                                <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"> 
                                                    <i className="fas fa-trash-alt mr-2"></i> 
                                                    Yêu cầu xoá tài khoản 
                                                </button> 
                                            </div> 
                                        </div> 
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div>             
        </div>
    )
}
