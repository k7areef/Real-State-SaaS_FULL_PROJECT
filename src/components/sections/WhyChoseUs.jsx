import choseUsReasons from "@data/choseUsReasons.json";
import SectionHeader from "./common/SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";

const iconsMaper = {
    "shield-halved": faShieldHalved,
    "wand-magic-sparkles": faWandMagicSparkles,
    "gem": faGem,
}

function WhyChoseUs() {
    return (
        <section className="why-chose-us-section py-5 md:py-10" id="whyChoseUs">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="لماذا نحن؟"
                    description="نحن نقدم أفضل خدمات العقارات في العالم"
                />
                {/* Reasons */}
                <div className="reasons grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        choseUsReasons.map((reason) => (
                            <div key={reason.id} className="reason-card bg-grey p-3 md:p-5 rounded-lg">
                                <div className="card-header flex items-center gap-3">
                                    <FontAwesomeIcon icon={iconsMaper[reason.icon]} className="text-primary text-xl" />
                                    <h3 className="text-lg font-semibold">{reason.title}</h3>
                                </div>
                                <p className="text-sm text-secondary/50 mt-2">{reason.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default WhyChoseUs;