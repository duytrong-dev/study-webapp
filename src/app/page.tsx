
import WelcomeBanner from "@/components/welcome-banner";
import TopNavigation from "@/components/top-navigation";
import StudyProductivityChart from "@/components/custom/study-productivity-chart";
import SubjectDistributionChart from "@/components/custom/subject-distribution-chart";
import DailyPatternChart from "@/components/custom/daily-pattern-chart";
import LearningEfficiency from "@/components/custom/learning-efficiency";
import CreateContentCard from "@/components/custom/create-content-card";
import LeaderBoard from "@/components/custom/leader-board";
import StudyTools from "@/components/custom/study-tools";
import Flashcards from "@/components/custom/flashcards";
import { Button } from "@/components/ui/button";
import ChallengesSection from "@/components/custom/challenges-section";
import CoursesSection from "@/components/custom/courses-section";

export default function Home() {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <TopNavigation/>
            <div className="flex-1 overflow-auto p-6 transition-colors duration-300">
                <WelcomeBanner/>
                <div className="grid grid-cols-1 gap-6 mb-0 lg:grid-cols-3">
                    <div className="bg-white shadow rounded-lg overflow-hidden lg:col-span-2">
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Phân tích học tập chi tiết</h2>
                            <div className="flex space-x-2 mt-2">
                                <Button className="text-xs bg-primary-100 text-primary-600 px-2 rounded-md hover:bg-gray-200">Tuần này</Button>
                                <Button className="text-xs bg-gray-100 text-gray-600 px-2 rounded-md hover:bg-gray-200">Tháng này</Button>
                                <Button className="text-xs bg-gray-100 text-gray-600 px-2 rounded-md hover:bg-gray-200">3 tháng</Button>
                            </div>
                        </div>
                        <div className="p-6">
                            <StudyProductivityChart/>
                            <SubjectDistributionChart/>
                            <DailyPatternChart/>
                            <LearningEfficiency/>
                            <CoursesSection/>
                            <ChallengesSection/>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <LeaderBoard/>
                        <CreateContentCard/>
                        <StudyTools/>
                        <Flashcards/>
                    </div>
                </div>
            </div>
        </div>
    )
}
