import AboutHeader from "@components/sections/AboutHeader";
import OurTeam from "@components/sections/OurTeam";
import Statistics from "@components/sections/Statistics";
import Testimonials from "@components/sections/Testimonials";
import WhyChoseUs from "@components/sections/WhyChoseUs";

function AboutPage() {
    return (
        <div className="AboutPage">
            <AboutHeader />
            <Statistics />
            <WhyChoseUs />
            <OurTeam />
            <Testimonials />
        </div>
    )
}

export default AboutPage;