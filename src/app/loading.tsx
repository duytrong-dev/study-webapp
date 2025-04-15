export default function Loading() {
    return (
        <div className="loading-container">
            <div className="eduflow-logo">
                <i className="fas fa-graduation-cap"></i>
                <span>EduFlow Pro</span>
            </div>
            
            <p className="text-xl font-bold text-slate-800 mb-2">Đang tải ứng dụng</p>
            
            <div className="loading-bar">
                <div className="loading-progress"></div>
            </div>
        </div>
    )
}
