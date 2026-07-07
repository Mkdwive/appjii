import GradientBorderCard from "./GradientBorderCard";
import { ecosystemData } from "../homepageData/powerfullAppData";
const MostPowerfullApp = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 mx-auto">
                    <div className="section-header">
                        <h2 className="features-title fz-42 common-title"
                            data-aos="fade-up" data-aos-delay="200">Most
                            Powerful Apps
                            <span className="text-primary-color"> Coming
                                Soon</span>
                        </h2>
                        <p className=" fz-16" data-aos="fade-up" data-aos-delay="300">
                            Expand your business toolkit with upcoming appjii applications designed to simplify
                            communication, sales, operations, and customer management from one connected ecosystem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ecosystem-grid" data-aos="fade-up" data-aos-delay="300">
                {
                    ecosystemData.map((cardProps) => {
                        return (
                            <GradientBorderCard key={cardProps.id}
                                {
                                ...cardProps
                                }

                            />
                        )
                    })
                }



            </div>
        </div>
    )
}

export default MostPowerfullApp