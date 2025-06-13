'use client';
import { useState } from "react";

const questions = [
    {
        question: "Câu 1: Kết quả của biểu thức 3 ** 2 trong Python là gì?",
        options: [
            { label: "A", text: "6" },
            { label: "B", text: "9" },
            { label: "C", text: "8" },
            { label: "D", text: "5" }
        ]
    },
    {
        question: "Câu 2: Hàm nào dùng để nhập dữ liệu từ bàn phím trong Python?",
        options: [
            { label: "A", text: "scan()" },
            { label: "B", text: "input()" },
            { label: "C", text: "get()" },
            { label: "D", text: "read()" }
        ]
    },
    {
        question: "Câu 3: Kiểu dữ liệu nào sau đây là immutable trong Python?",
        options: [
            { label: "A", text: "list" },
            { label: "B", text: "set" },
            { label: "C", text: "tuple" },
            { label: "D", text: "dict" }
        ]
    },
    {
        question: "Câu 4: Đâu là cú pháp đúng để khai báo hàm trong Python?",
        options: [
            { label: "A", text: "function myFunc():" },
            { label: "B", text: "def myFunc():" },
            { label: "C", text: "func myFunc():" },
            { label: "D", text: "define myFunc():" }
        ]
    },
    {
        question: "Câu 5: Kết quả của len('Python') là gì?",
        options: [
            { label: "A", text: "5" },
            { label: "B", text: "6" },
            { label: "C", text: "7" },
            { label: "D", text: "Lỗi" }
        ]
    }
];

const mockHistory = [
    {
        id: 1,
        date: "2024-06-12 14:30",
        score: 4,
        total: 5,
        time: "3 phút 20 giây"
    },
    {
        id: 2,
        date: "2024-06-10 09:15",
        score: 5,
        total: 5,
        time: "2 phút 50 giây"
    }
];

export default function ExercisePage() {
    const [current, setCurrent] = useState(0);
    const [marked, setMarked] = useState<number[]>([]);
    const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
    const [showHistory, setShowHistory] = useState(false);

    const handleMark = () => {
        if (!marked.includes(current)) setMarked([...marked, current]);
    };

    const handleUnmark = () => {
        setMarked(marked.filter(idx => idx !== current));
    };

    const handleSelect = (optionLabel: string) => {
        setAnswers(ans => {
            const next = [...ans];
            next[current] = optionLabel;
            return next;
        });
    };

    return (
        <div className="flex-1 overflow-auto p-2 transition-colors duration-300 md:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Overlay lịch sử làm bài */}
                {showHistory && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg w-full max-w-lg p-6 relative">
                            <button
                                className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl"
                                onClick={() => setShowHistory(false)}
                                aria-label="Đóng"
                            >
                                &times;
                            </button>
                            <h2 className="text-xl font-bold text-primarycolor-blue mb-4">Lịch sử làm bài</h2>
                            {mockHistory.length === 0 ? (
                                <div className="text-gray-500 text-center py-8">Chưa có lịch sử làm bài.</div>
                            ) : (
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                                            <th className="py-2">Thời gian</th>
                                            <th className="py-2">Điểm</th>
                                            <th className="py-2">Thời gian làm</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mockHistory.map(h => (
                                            <tr key={h.id} className="border-b border-gray-100 dark:border-gray-700">
                                                <td className="py-2">{h.date}</td>
                                                <td className="py-2">{h.score}/{h.total}</td>
                                                <td className="py-2">{h.time}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                )}

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-primarycolor-blue mb-2">Bài kiểm tra Python</h1>
                        <p className="text-gray-600 dark:text-gray-400">Bài tập trắc nghiệm cơ bản</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-dark-700 dark:text-gray-300"
                            onClick={() => setShowHistory(true)}
                        >
                            <i className="fas fa-history mr-2"></i> Lịch sử làm bài
                        </button>
                    </div>
                </div>
                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Danh sách câu hỏi */}
                    <div className="lg:col-span-1 bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Danh sách câu hỏi</h2>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-5 gap-2 mb-4">
                                {questions.map((q, idx) => (
                                    <div
                                        key={idx}
                                        className={`question-nav-item flex items-center justify-center h-10 w-10 rounded-full cursor-pointer border
                                            ${current === idx
                                                ? "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 border-primarycolor-blue"
                                                : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border-transparent"
                                            }
                                            ${marked.includes(idx) ? "ring-2 ring-yellow-400" : ""}
                                            ${answers[idx] ? "font-bold border-primarycolor-blue" : ""}
                                        `}
                                        onClick={() => setCurrent(idx)}
                                        title={marked.includes(idx) ? "Đã đánh dấu" : ""}
                                    >
                                        {idx + 1}
                                    </div>
                                ))}
                            </div>
                            {/* Đánh dấu và tiến độ giữ nguyên */}
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Đánh dấu câu hỏi</h3>
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-200"
                                        onClick={handleMark}
                                        disabled={marked.includes(current)}
                                    >
                                        <i className="fas fa-bookmark mr-1"></i> Đánh dấu
                                    </button>
                                    <button
                                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                                        onClick={handleUnmark}
                                        disabled={!marked.includes(current)}
                                    >
                                        <i className="fas fa-eraser mr-1"></i> Xóa đánh dấu
                                    </button>
                                </div>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tiến độ làm bài</h3>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                        Đã làm: {answers.filter(a => a !== null).length}/{questions.length} câu
                                    </span>
                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                        {Math.round((answers.filter(a => a !== null).length / questions.length) * 100)}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div
                                        className="bg-primarycolor-blue h-2 rounded-full"
                                        style={{
                                            width: `${(answers.filter(a => a !== null).length / questions.length) * 100}%`
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-primarycolor-blue text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primarycolor-blue focus:ring-offset-2 transition-all">
                                <i className="fas fa-paper-plane mr-2"></i> Nộp bài
                            </button>
                        </div>
                    </div>
                    {/* Nội dung câu hỏi */}
                    <div className="lg:col-span-3 bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                Câu hỏi <span>{current + 1}</span>/{questions.length}
                            </h2>
                        </div>
                        <div className="p-6">
                            <div className="question-content">
                                <div className="mb-6">
                                    <p className="text-gray-800 dark:text-gray-200 mb-4">{questions[current].question}</p>
                                    <div className="space-y-3">
                                        {questions[current].options.map((opt, i) => (
                                            <label
                                                key={i}
                                                className={`flex items-center p-3 rounded-lg cursor-pointer border transition-all
                                                    ${answers[current] === opt.label
                                                        ? "border-primarycolor-blue bg-primary-50 dark:bg-primary-900"
                                                        : "border-gray-200 dark:border-gray-700"
                                                    }
                                                    hover:border-primarycolor-blue`}
                                            >
                                                <input
                                                    type="radio"
                                                    name={`question-${current}`}
                                                    className="form-radio accent-primarycolor-blue mr-3"
                                                    checked={answers[current] === opt.label}
                                                    onChange={() => handleSelect(opt.label)}
                                                />
                                                <span className="font-medium mr-2">{opt.label}.</span>
                                                <span>{opt.text}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <button
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300"
                                        onClick={() => setCurrent(c => (c > 0 ? c - 1 : c))}
                                        disabled={current === 0}
                                    >
                                        <i className="fas fa-arrow-left mr-2"></i> Câu trước
                                    </button>
                                    <div className="flex space-x-3">
                                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300">
                                            <i className="fas fa-flag mr-2"></i> Báo lỗi
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-primarycolor-blue text-white rounded-lg hover:bg-primary-700"
                                            onClick={() => setCurrent(c => (c < questions.length - 1 ? c + 1 : c))}
                                            disabled={current === questions.length - 1}
                                        >
                                            Câu tiếp theo <i className="fas fa-arrow-right ml-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}