'use client';
import { useRef, useState, useEffect } from "react";

const TIMER_CONFIG = {
    pomodoro: { label: "Pomodoro", minutes: 25, state: "Thời gian tập trung" },
    shortBreak: { label: "Nghỉ ngắn", minutes: 5, state: "Nghỉ ngơi thư giãn" },
    longBreak: { label: "Nghỉ dài", minutes: 15, state: "Nghỉ ngơi thư giãn" }
};
const CIRCLE_LENGTH = 283;

export default function Pomodoro() {
    const [timerType, setTimerType] = useState<"pomodoro" | "shortBreak" | "longBreak">("pomodoro");
    const [minutes, setMinutes] = useState(TIMER_CONFIG.pomodoro.minutes);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [pomodoroCount, setPomodoroCount] = useState(0);
    const [alarmOn, setAlarmOn] = useState(true);
    const [focusTime, setFocusTime] = useState(25);
    const [shortBreakTime, setShortBreakTime] = useState(5);
    const [longBreakTime, setLongBreakTime] = useState(15);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Timer logic
    useEffect(() => {
        if (!isRunning) return;
        intervalRef.current = setInterval(() => {
            setSeconds(prev => {
                if (prev === 0) {
                    if (minutes === 0) {
                        handleComplete();
                        return 0;
                    }
                    setMinutes(m => m - 1);
                    return 59;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(intervalRef.current as NodeJS.Timeout);
        // eslint-disable-next-line
    }, [isRunning, minutes]);

    // Update progress circle
    const getProgress = () => {
        const total =
            timerType === "pomodoro"
                ? 25 * 60
                : timerType === "shortBreak"
                ? 5 * 60
                : 15 * 60;
        const current = minutes * 60 + seconds;
        return CIRCLE_LENGTH - (CIRCLE_LENGTH * current) / total;
    };

    // Tab switching
    const switchTab = (type: "pomodoro" | "shortBreak" | "longBreak") => {
        setTimerType(type);
        setIsRunning(false);
        clearInterval(intervalRef.current as NodeJS.Timeout);
        setMinutes(TIMER_CONFIG[type].minutes);
        setSeconds(0);
    };

    // Start, pause, reset
    const handleStart = () => setIsRunning(true);
    const handlePause = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setMinutes(TIMER_CONFIG[timerType].minutes);
        setSeconds(0);
    };

    // Complete timer
    const handleComplete = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current as NodeJS.Timeout);

        // Play sound and notification
        if (alarmOn) {
            const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
            audio.play();
            if (typeof window !== "undefined" && "Notification" in window) {
                if (Notification.permission === "granted") {
                    const message =
                        timerType === "pomodoro"
                            ? "Đã kết thúc thời gian học tập! Nghỉ ngơi thôi!"
                            : "Đã hết giờ nghỉ! Bắt đầu học tập mới!";
                    new Notification("Efudoro Pro", { body: message });
                }
            }
        }

        // Auto switch
        if (timerType === "pomodoro") {
            setPomodoroCount(c => c + 1);
            if ((pomodoroCount + 1) % 4 === 0) {
                switchTab("longBreak");
            } else {
                switchTab("shortBreak");
            }
        } else {
            switchTab("pomodoro");
        }
    };

    // Request notification permission
    useEffect(() => {
        if (typeof window !== "undefined" && "Notification" in window) {
            Notification.requestPermission();
        }
    }, []);

    return (
        <div className="flex-1 overflow-auto p-6 bg-gray-50 transition-colors duration-300">
            <div className="flex flex-col lg:flex-row gap-8 mb-10">
                {/* Timer Section */}
                <div className="w-full lg:w-8/12">
                    <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary-200 opacity-20"></div>
                        <div className="absolute -bottom-16 -left-8 w-40 h-40 rounded-full bg-secondary-200 opacity-30"></div>
                        <div className="relative z-10">
                            <div className="flex flex-col items-center py-6">
                                {/* Tabs */}
                                <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
                                    {(["pomodoro", "shortBreak", "longBreak"] as const).map(type => (
                                        <button
                                            key={type}
                                            className={`px-6 py-2 rounded-lg transition-transform hover:-translate-y-0.5 font-semibold
                                                ${timerType === type ? "bg-primary-500 text-white" : ""}
                                            `}
                                            onClick={() => switchTab(type)}
                                        >
                                            {TIMER_CONFIG[type].label}
                                        </button>
                                    ))}
                                </div>
                                {/* Timer Display */}
                                <div className="timer-3d relative w-72 h-72">
                                    <div className="progress-container absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="text-6xl font-bold text-gray-600 tab-animate-in animate-grow">
                                            {`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
                                        </div>
                                        <div className="text-xl text-primary-500 font-semibold mt-4 tab-animate-in">
                                            {TIMER_CONFIG[timerType].state}
                                        </div>
                                        {/* Wave animation */}
                                        <div className="absolute inset-0 rounded-full overflow-hidden">
                                            <div className="wave-animation absolute inset-0 bg-gradient-to-r from-transparent via-primary-50 to-transparent opacity-30"></div>
                                        </div>
                                    </div>
                                    {/* Circular progress */}
                                    <div className={`timer-ring absolute inset-0 rounded-full border-8 border-gray-100 overflow-hidden ${timerType === "pomodoro" ? "active" : "break"}`}>
                                        <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="none"
                                                stroke="#0ea5e9"
                                                strokeWidth="8"
                                                strokeDasharray={CIRCLE_LENGTH}
                                                strokeDashoffset={getProgress()}
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {/* Timer Controls */}
                                <div className="flex justify-center space-x-4 mt-10">
                                    {!isRunning ? (
                                        <button
                                            className="px-8 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 flex items-center"
                                            onClick={handleStart}
                                        >
                                            <i className="fas fa-play mr-2"></i> Bắt đầu
                                        </button>
                                    ) : (
                                        <button
                                            className="px-8 py-3 bg-yellow-500 text-white rounded-xl font-semibold hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 flex items-center"
                                            onClick={handlePause}
                                        >
                                            <i className="fas fa-pause mr-2"></i> Tạm dừng
                                        </button>
                                    )}
                                    <button
                                        className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 focus:ring-4 focus:ring-gray-300"
                                        onClick={handleReset}
                                    >
                                        <i className="fas fa-sync-alt mr-2"></i> Đặt lại
                                    </button>
                                    <button
                                        id="alarm-toggle"
                                        className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 flex items-center"
                                        onClick={() => setAlarmOn(a => !a)}
                                    >
                                        <i className={`fas ${alarmOn ? "fa-toggle-on text-green-500" : "fa-toggle-off"} text-xl mr-2`}></i>
                                        Âm báo
                                    </button>
                                </div>
                                {/* Task Display */}
                                <div className="bg-gray-100 rounded-xl p-4 mt-8 w-full max-w-md">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium">TẬP TRUNG VÀO:</span>
                                        <button className="text-xs text-primary-600 hover:text-primary-500">
                                            <i className="fas fa-edit mr-1"></i> Thay đổi
                                        </button>
                                    </div>
                                    <h3 className="font-medium text-gray-800 text-lg flex items-center">
                                        <i className="fas fa-bookmark text-primary-500 mr-2"></i>
                                        <span>Hoàn thành bài tập Python</span>
                                    </h3>
                                    <div className="mt-4">
                                        <div className="text-xs text-gray-500 mb-2 flex justify-between">
                                            <span>Tiến độ công việc</span>
                                            <span>50%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-primary-500 progress-fill h-2 rounded-full" style={{ width: '50%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stats and Settings giữ nguyên */}
                <div className="w-full lg:w-4/12">
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-medium text-gray-600 dark:text-white">Cây kiến thức khóa học Python</h2>
                        </div>
                        <h2 className="text-xl font-bold text-primarycolor-blue mb-6">Thống kê & Cài đặt</h2>
                        {/* Pomodoro Statistics */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-600 mb-4">Thống kê Pomodoro</h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-gray-100 p-4 rounded-xl">
                                    <div className="text-sm text-gray-500 mb-1">Hoàn thành hôm nay</div>
                                    <div className="text-2xl font-bold text-primarycolor-blue">3</div>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-xl">
                                    <div className="text-sm text-gray-500 mb-1">Tuần này</div>
                                    <div className="text-2xl font-bold text-primarycolor-blue">12</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium">Năng suất hôm nay:</span>
                                <span className="text-sm font-bold text-primarycolor-blue">75%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                                <div className="bg-primarycolor-blue h-2 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        {/* Timing Settings */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Cài đặt thời gian (phút)</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-gray-600 mb-1 block">Thời gian tập trung</label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="60"
                                        value={focusTime}
                                        onChange={e => setFocusTime(Number(e.target.value))}
                                        className="w-full p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-primary-300"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-600 mb-1 block">Thời gian nghỉ ngắn</label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="60"
                                        value={shortBreakTime}
                                        onChange={e => setShortBreakTime(Number(e.target.value))}
                                        className="w-full p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-primary-300"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-600 mb-1 block">Thời gian nghỉ dài</label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="60"
                                        value={longBreakTime}
                                        onChange={e => setLongBreakTime(Number(e.target.value))}
                                        className="w-full p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-primary-300"
                                    />
                                </div>
                            </div>
                            <button className="w-full mt-6 py-3 bg-gray-200 rounded-lg text-gray-800 hover:bg-gray-300 font-semibold">
                                Lưu cài đặt
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
