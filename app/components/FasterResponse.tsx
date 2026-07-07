import IconsisedBgCard from "./IconsisedBgCard"
import { collaborationCards } from "../homepageData/collabrationCardData"
const FasterResponse = () => {
    return (
        <div className="collabration-sec common-union pt-134 pb-134">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 mx-auto">
                        <div className="collab-sec-content">
                            <h2 className=" fz-48  common-title mx-auto text-center response-title fw-700"
                                data-aos="fade-up" data-aos-delay="100">
                                Built for Faster Responses and Better Collaboration
                            </h2>
                            <p className="fz-18 fw-400 text-center" data-aos="fade-up" data-aos-delay="200">Manage all
                                customer communication channels from a
                                single shared
                                inbox. Your team can respond faster, collaborate efficiently, and maintain complete
                                visibility across customer interactions.</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row row-cols-lg-5 row-cols-sm-3 card-gap gy-sm-4">
                            {
                                collaborationCards.map((cardData) => (
                                    <div key={cardData.id} className="col" data-aos="fade-up" data-aos-delay={`${cardData.delay}`}>
                                        <IconsisedBgCard
                                            {...cardData}
                                        />
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FasterResponse