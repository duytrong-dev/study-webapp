import Link from "next/link";

export default function PomodoroMiniControl() {
    return (
        <div className="mt-6 md:mt-0">
            <div className="bg-white bg-opacity-20 rounded-xl p-4 flex flex-col items-center">
                <div className="text-white font-medium mb-2">Pomodoro</div>
                <div className="flex items-center space-x-4">
                    <div className="text-center">
                        <div id="mini-timer" className="text-2xl font-bold text-white">25:00</div>
                        <div className="text-xs text-white opacity-80">Làm việc</div>
                    </div>
                    <div className="flex space-x-2">
                        <Link href={'/pomodoro'} id="mini-start" className="p-2 bg-white text-primary-600 rounded-full hover:bg-gray-100 focus:outline-none">
                            <i className="fas fa-play"></i>
                        </Link>
                        <button id="mini-focus" className="p-2 bg-white text-primary-600 rounded-full hover:bg-gray-100 focus:outline-none">
                            <i className="fas fa-bolt"></i>
                        </button>
                        <button className="p-2 bg-white text-primary-600 rounded-full hover:bg-gray-100 focus:outline-none">
                            <i className="fas fa-music"></i>
                        </button>
                    </div>
                </div>
                <div className="mt-3 w-full bg-white bg-opacity-30 rounded-full h-1.5">
                    <div className="bg-white h-1.5 rounded-full w-[60%]" ></div>
                </div>
            </div>
        </div>
    )
}
