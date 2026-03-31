import SectionHeader from "./common/SectionHeader";
import teamMembers from "@data/teamMembers.json";
import TeamImage1 from "@assets/images/team/team-1.jpg";
import TeamImage2 from "@assets/images/team/team-2.jpg";
import TeamImage3 from "@assets/images/team/team-3.jpg";
import TeamImage4 from "@assets/images/team/team-4.jpg";

const images = [TeamImage1, TeamImage2, TeamImage3, TeamImage4];

function OurTeam() {
    return (
        <section className="our-team-section py-5 md:py-10" id="ourTeam">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="فريقنا"
                    description="فريقنا من الخبراء في عالم العقارات"
                />
                {/* Team Members */}
                <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        teamMembers.map((teamMember, index) => (
                            <div key={index} className="team-card">
                                <img src={images[index]} alt={`Team Member ${index + 1}`} className="aspect-square object-cover rounded-lg mb-3" />
                                <div className="team-member-info flex flex-col items-center justify-center gap-1">
                                    <h3 className="text-lg font-semibold">{teamMember.name}</h3>
                                    <span className="text-sm text-primary font-medium">{teamMember.role}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurTeam;