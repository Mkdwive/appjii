import Image from "next/image";
import CommonBtn from "./CommonBtn";
const StopSwitchingBetweenApps = () => {
    return (
        <div className="container-fluid">
            <div className="cta-banner-card ai-banner-card common-union-fade-both stop-switching-sec">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="position-relative">
                            <h2 className="cta-banner-title fz-48 common-title max-w-none " data-aos="fade-up"
                                data-aos-delay="100">
                                Stop Switching Between Multiple Communication Tools

                            </h2>
                        </div>
                        <p className="cta-banner-desc text-start" data-aos="fade-up" data-aos-delay="300">
                            Centralize WhatsApp, Email, SMS, Live Chat, Forms, Messenger, and Instagram. Empower your
                            team with one collaborative platform.
                        </p>
                        <div className="cta-group mx-0 justify-content-start" data-aos="fade-up" data-aos-delay="300">
                            <CommonBtn
                                path="#"
                                title="Start Free Beta"
                                variant="primary"
                            />
                            <CommonBtn
                                path="#"
                                title="Book Demo"
                                variant="outline"
                            />
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="manage-inbox-wrap">
                            <Image className="img-fluid"
                                src="/images/stop-switching.png"
                                alt="Stop Switching" width={490} height={417}
                                style={{ height: 'auto' }}

                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StopSwitchingBetweenApps