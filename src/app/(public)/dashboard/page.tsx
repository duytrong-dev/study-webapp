
import WelcomeBanner from "@/components/custom/welcome-banner";
import StudyProductivityChart from "@/components/custom/study-productivity-chart";
import SubjectDistributionChart from "@/components/custom/subject-distribution-chart";
import DailyPatternChart from "@/components/custom/daily-pattern-chart";
import LearningEfficiency from "@/components/custom/learning-efficiency";
import LeaderBoard from "@/components/custom/leader-board";
import StudyTools from "@/components/custom/study-tools";
import { Button } from "@/components/ui/button";
import CreateContentCard from "@/components/custom/create-content-card";

export default function DashboardPage() {
    return (
        <div className="flex-1 overflow-auto p-2 transition-colors duration-300 md:p-6">
            <WelcomeBanner/>
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <div className="bg-white shadow rounded-lg overflow-hidden lg:col-span-2">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-medium text-gray-900">Phân tích học tập chi tiết</h2>
                        <div className="flex space-x-2 mt-2">
                            <Button className="text-xs bg-primary-100 text-primary-600 px-2 rounded-md hover:bg-gray-200">Tuần này</Button>
                            <Button className="text-xs bg-gray-100 text-gray-600 px-2 rounded-md hover:bg-gray-200">Tháng này</Button>
                            <Button className="text-xs bg-gray-100 text-gray-600 px-2 rounded-md hover:bg-gray-200">3 tháng</Button>
                        </div>
                    </div>
                    <div className="p-6">
                        <LearningEfficiency/>
                        <StudyProductivityChart/>
                        <SubjectDistributionChart/>
                        <DailyPatternChart/>
                    </div>
                </div>
                <div className="space-y-6">
                    <LeaderBoard/>
                    <CreateContentCard/>
                    <StudyTools/>
                </div>
            </div>
        </div>
    )
}
