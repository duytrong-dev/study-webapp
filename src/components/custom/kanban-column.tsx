import Image from "next/image";
import React from "react";

interface Task {
    title: string;
    due: string;
    labels: string[];
    members?: string[];
    subject: string;
    time: string;
    status?: string;
    statusColor?: string;
    completed?: boolean;
    completedInfo?: string;
}

interface KanbanColumnProps {
    title: string;
    titleColor: string;
    count: number;
    countBg: string;
    bgHeader: string;
    tasks: Task[];
    addTaskLabel?: string;
}

export default function KanbanColumn({
    title,
    titleColor,
    count,
    countBg,
    bgHeader,
    tasks,
    addTaskLabel = "Thêm nhiệm vụ"
}: KanbanColumnProps) {
    return (
        <div>
            <div className={`${bgHeader} rounded-lg p-3 mb-2`}>
                <div className="flex justify-between items-center">
                    <div>
                        <span className={`font-medium ${titleColor}`}>{title}</span>
                        <span className={`ml-2 text-xs ${countBg} px-2 py-1 rounded-full`}>{count}</span>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-ellipsis-h"></i>
                    </button>
                </div>
            </div>
            <div className="kanban-column rounded-lg p-4 space-y-4">
                {tasks.map((task, idx) => (
                    <div
                        key={idx}
                        className={`kanban-item task-item bg-white rounded-lg shadow-md p-4 ${task.completed ? "completed opacity-80" : ""} cursor-move`}
                    >
                        <div className="flex justify-between items-start">
                            <h3 className={`font-medium ${task.completed ? "text-green-600 line-through" : "text-gray-600"}`}>{task.title}</h3>
                            <div>
                                <span className={`text-xs ${task.completed ? "text-green-600" : "text-gray-500"}`}>
                                    {task.completed ? "Đã hoàn thành" : task.due}
                                </span>
                            </div>
                        </div>
                        <div className="flex mt-2">
                            {task.labels.map((label, i) => (
                                <div key={i} className={`task-label label-${label.toLowerCase()} mr-2`}>{label}</div>
                            ))}
                        </div>
                        <div className="mt-4 flex items-center">
                            <div className={`w-6 h-6 rounded-full ${task.completed ? "bg-green-500" : "bg-indigo-500"} text-white flex items-center justify-center text-xs mr-2`}>
                                <i className={task.subject.includes("Python") ? "fas fa-book" : "fas fa-language"}></i>
                            </div>
                            <span className="text-sm text-gray-500">{task.subject}</span>
                        </div>
                        {task.members && (
                            <div className="mt-4 flex items-center">
                                <div className="flex -space-x-2">
                                    {task.members.map((src, i) => (
                                        <Image key={i} className="w-8 h-8 rounded-full border-2 border-white" src={src} alt="User" width={32} height={32}/>
                                    ))}
                                </div>
                                <span className="ml-2 text-sm text-gray-500">{task.members.length} thành viên</span>
                            </div>
                        )}
                        {task.completedInfo && (
                            <div className="mt-4 flex items-center text-green-600">
                                <i className="fas fa-check-circle mr-2"></i>
                                <span>{task.completedInfo}</span>
                            </div>
                        )}
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex">
                                <div className={`w-6 h-6 rounded-full ${task.completed ? "bg-green-500 text-white" : "bg-indigo-100 text-indigo-600"} flex items-center justify-center text-xs mr-1`}>
                                    <i className="fas fa-clock"></i>
                                </div>
                                <span className="text-sm text-gray-500">{task.time}</span>
                            </div>
                            {task.status && (
                                <button className={`px-3 py-1 ${task.statusColor} text-sm rounded-full`}>
                                    <i className="fas fa-check-circle mr-1"></i> {task.status}
                                </button>
                            )}
                            {/* Action buttons nếu muốn thêm */}
                        </div>
                    </div>
                ))}
                {/* Add Task Card */}
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4 cursor-pointer hover:bg-gray-100">
                    <i className="fas fa-plus text-gray-400 mr-2"></i>
                    <span>{addTaskLabel}</span>
                </div>
            </div>
        </div>
    );
}