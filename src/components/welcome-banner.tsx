import PomodoroMiniControl from "./custom/pomodoro-mini-control";

export default function WelcomeBanner() {
    return (
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl shadow-sm p-6 mb-6 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-20">
                <i className="fas fa-graduation-cap text-8xl text-white"></i>
            </div>
            <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-white">Chào buổi sáng, Trọng!</h1>
                        <p className="mt-1 text-primary-100">Hôm nay bạn có 4 nhiệm vụ cần hoàn thành. Tiếp tục phát huy nhé!</p>
                        
                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                <div className="text-xs text-white opacity-80">Ngày học liên tiếp</div>
                                <div className="text-xl font-bold text-white flex items-center">
                                    7 <i className="fas fa-fire text-yellow-300 ml-1 animate-pulse-slow"></i>
                                </div>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                <div className="text-xs text-white opacity-80">XP hôm nay</div>
                                <div className="text-xl font-bold text-white">125/200</div>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded-lg p-3">
                                <div className="text-xs text-white opacity-80">Thử thách</div>
                                <div className="text-xl font-bold text-white">3/5</div>
                            </div>
                        </div>
                    </div>
                    
                    <PomodoroMiniControl/>
                    
                </div>
            </div>
        </div>
    )
}
