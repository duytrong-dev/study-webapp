import KanbanColumn from "@/components/custom/kanban-column";
import MissionActivity from "@/components/custom/mission-activity";

export default function Mission() {
    return (
        <div className="flex-1 overflow-auto p-6 bg-gray-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-primarycolor-blue">Nhiệm vụ học tập</h1>
                        <p className="mt-1 text-gray-500">Quản lý tất cả nhiệm vụ học tập của bạn tại một nơi</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button id="new-task-btn" className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                            <i className="fas fa-plus mr-2"></i> Tạo nhiệm vụ mới
                        </button>
                    </div>
                </div>
                {/* Kanban Board */}
                <div className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <KanbanColumn
                            title="Cần làm"
                            titleColor="text-gray-700"
                            count={8}
                            countBg="bg-gray-300 text-gray-700"
                            bgHeader="bg-gray-200"
                            tasks={[
                                {
                                    title: "Làm bài tập Python Bài 5",
                                    due: "Hôm nay",
                                    labels: ["Bài tập", "Dự án"],
                                    subject: "Lập trình Python",
                                    time: "1 giờ"
                                },
                                {
                                    title: "Đọc tài liệu chương 3",
                                    due: "Ngày mai",
                                    labels: ["Đọc"],
                                    subject: "Tiếng Nhật N5",
                                    time: "45 phút"
                                }
                            ]}
                        />
                        <KanbanColumn
                            title="Đang thực hiện"
                            titleColor="text-blue-600"
                            count={14}
                            countBg="bg-blue-500 text-white"
                            bgHeader="bg-blue-500/10"
                            tasks={[
                                {
                                    title: "Thiết kế giao diện website",
                                    due: "Sắp đến hạn",
                                    labels: ["Dự án"],
                                    subject: "Thiết kế Web",
                                    time: "2 giờ",
                                    status: "65% hoàn thành",
                                    statusColor: "bg-purple-100 text-purple-800 hover:bg-purple-200"
                                },
                                {
                                    title: "Soạn flashcard từ vựng",
                                    due: "14:00 - 15:00",
                                    labels: ["Dự án"],
                                    subject: "Tiếng Nhật N5",
                                    time: "45 phút",
                                    status: "40% hoàn thành",
                                    statusColor: "bg-green-100 text-green-800 hover:bg-green-200"
                                }
                            ]}
                        />
                        <KanbanColumn
                            title="Cần xem xét"
                            titleColor="text-yellow-600"
                            count={2}
                            countBg="bg-yellow-500 text-white"
                            bgHeader="bg-yellow-500/10"
                            tasks={[
                                {
                                    title: "Kiểm tra lỗi dự án nhóm",
                                    due: "Hôm nay",
                                    labels: ["Dự án", "Xem xét"],
                                    members: [
                                        "/user-1.jpg",
                                        "/user-2.jpg",
                                    ],
                                    subject: "Lập trình Python",
                                    time: "1 giờ",
                                    status: "Xem xét",
                                    statusColor: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                                }
                            ]}
                        />
                        <KanbanColumn
                            title="Hoàn thành"
                            titleColor="text-green-600"
                            count={2}
                            countBg="bg-green-500 text-white"
                            bgHeader="bg-green-500/10"
                            tasks={[
                                {
                                    title: "Xem video bài giảng 4",
                                    due: "",
                                    labels: ["Đọc"],
                                    subject: "Lập trình Python",
                                    time: "",
                                    completed: true,
                                    completedInfo: "Đã hoàn thành: Hôm qua lúc 16:45"
                                },
                                {
                                    title: "Ôn tập ngữ pháp Bài 2",
                                    due: "",
                                    labels: ["Xem xét"],
                                    subject: "Tiếng Nhật N5",
                                    time: "",
                                    completed: true,
                                    completedInfo: "Đã hoàn thành: Hôm qua lúc 10:30"
                                }
                            ]}
                        />
                    </div>
                </div>

                <MissionActivity />
            </div>
        </div>
    );
}
