import Image from "next/image";
const MultiBusiness = () => {
    return (
        <div className="multi-business-sec pb-134">
            <div className="container">
                <div className="row align-items-center multi-business-gap gy-4">
                    <div className="col-lg-6">
                        <h2 className="fw-700 fz-48 common-title multi-business-title" data-aos="fade-right"
                            data-aos-delay="100">Built For Teams, Brands &
                            Multi-Business Operations</h2>
                        <p data-aos="fade-right" data-aos-delay="200">
                            Create and manage multiple workspaces from a single platform.
                        </p>
                        <p data-aos="fade-right" data-aos-delay="300">
                            Whether you operate multiple brands, departments, regional teams, or client accounts,
                            our workspace architecture allows you to organize communication efficiently.
                        </p>
                        <div className="check-list-wrapper">
                            <div className="checklist-col">
                                <h3 className=" fz-20 fw-600 multi-check-list-title checklist-common-title"
                                    data-aos="fade-right" data-aos-delay="400">
                                    Each workspace can have:
                                </h3>
                                <ul className="checklist" data-aos="fade-right" data-aos-delay="500">
                                    <li>Dedicated inboxes</li>
                                    <li>Separate channels</li>
                                    <li>Team-specific access</li>
                                    <li>Individual permissions</li>
                                    <li>Independent workflows</li>
                                </ul>
                            </div>
                            <div className="checklist-col">
                                <h3 className=" fz-20 fw-600 multi-check-list-title checklist-common-title"
                                    data-aos="fade-left" data-aos-delay="400">
                                    Perfect for:
                                </h3>
                                <ul className="checklist" data-aos="fade-left" data-aos-delay="500">
                                    <li>Agencies</li>
                                    <li>Enterprise Teams</li>
                                    <li>Multi-Brand Companies</li>
                                    <li>Support Operations</li>
                                    <li>Event Businesses</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
                        <div className="business-op-card">
                            <div className="position-relative z-5">
                                <Image
                                    src="/images/multi-business-mobile.png"
                                    alt="multi-business-mobile.png" width={381}
                                    height={513}
                                              style={{ height: 'auto' }}
                                    />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MultiBusiness