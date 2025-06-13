import Header from "@/components/header";
import "../styles/home.css"
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import CourseSection from "@/components/course-section";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import StatisticalSection from "@/components/statistical-section";
import PlatformSection from "@/components/platform-section";
import TechnologySection from "@/components/technology-section";
import TestimonialsSection from "@/components/testimonials-section";
export default function Home() {
    return (
        <div className="flex flex-1 flex-col overflow-x-hidden">
            <Header />
            <HeroSection />
            <FeatureSection />
            <CourseSection />
            <StatisticalSection />
            <PlatformSection />
            <TechnologySection />
            <TestimonialsSection />
            <CTASection />
            <Footer />
        </div>
    )
}
