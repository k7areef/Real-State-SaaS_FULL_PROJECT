import CTA from "@components/common/CTA";
import FeaturedProperties from "@components/sections/FeaturedProperties";
import Features from "@components/sections/Features";
import HeroSection from "@components/sections/HeroSection";
import Testimonials from "@components/sections/Testimonials";

function HomePage() {
    return (
        <div className="home-page">
            <Features />
            <FeaturedProperties />
            <HeroSection />
            <Testimonials />
            <CTA />
        </div>
    )
}

export default HomePage;