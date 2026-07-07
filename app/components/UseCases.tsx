
import Image from "next/image";
import GradienBgIconisedCard from "./GradienBgIconisedCard";
import { useCasesData } from "../homepageData/useCaseCardData";
const UseCases = () => {
    return (

        <div className="use-cases-section common-union-fade-both">
            <div className="container grid-2col">

                <div className="use-cases-info-block text-left" data-aos="fade-up">
                    <h2 className="features-title fz-48 common-title" data-aos="fade-right" data-aos-delay="100">
                        One Platform.<br />Multiple Business <span className="text-blue">Use Cases</span>
                    </h2>

                    <div className="features-desc fz-16" data-aos="fade-up" data-aos-delay="200">
                        <p data-aos="fade-right" data-aos-delay="200">
                            AppJii Inbox helps modern businesses manage customer communication across multiple
                            channels from one centralized platform. Improve team collaboration, streamline
                            conversations, and deliver faster customer experiences with a unified inbox.
                        </p>
                    </div>
                    <div className="use-case-img-wrap " data-aos="fade-right" data-aos-delay="300">
                        <div className="relative">
                            <Image
                                className="img-fluid"
                                src="/images/multiple-use-case.jpg"
                                alt="multiple-use-case.jpg"
                                width={600}
                                height={333}
                                style={{ height: 'auto' }}
                            >
                            </Image>
                        </div>

                    </div>



                </div>

                <div className="use-cases-cards-grid" data-aos="fade-left" data-aos-duration="1000">
                    {
                        useCasesData?.map((useCaseCardData) => (
                            <GradienBgIconisedCard
                                key={useCaseCardData.id}
                                {...useCaseCardData}
                            />
                        ))
                    }


                </div>

            </div>
        </div>
    )
}

export default UseCases