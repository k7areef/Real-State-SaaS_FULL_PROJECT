import AboutHeader from "@components/sections/AboutHeader";
import OurTeam from "@components/sections/OurTeam";
import Statistics from "@components/sections/Statistics";
import WhyChoseUs from "@components/sections/WhyChoseUs";

function AboutPage() {
    return (
        <div className="AboutPage">
            <AboutHeader />
            <Statistics />
            <WhyChoseUs />
            <OurTeam />
        </div>
    )
}

export default AboutPage;