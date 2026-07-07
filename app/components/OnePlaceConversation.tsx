import Image from 'next/image'
import ChannelCard from './ChannelCard'
import { channelData } from '../homepageData/channelCardData'
const OnePlaceConversation = () => {
    return (
        <div className="pt-134 pb-134 one-place-sec common-union-fade-both">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 mx-auto">
                        <div className="one-place-content">
                            <h2 className="fz-48 mb-34 common-title mx-auto text-center response-title fw-700 "
                                data-aos="fade-up" data-aos-delay="100">
                                Bring Every Customer Conversation Into <span className="text-blue">One Place</span>
                            </h2>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="channels-grid">
                            {
                                channelData.map((channelCardData) => (
                                    <ChannelCard key={channelCardData.id}
                                        {...channelCardData}
                                    />
                                ))
                            }

                        </div>
                        <div className="branch-svg-wrap">
                            <Image className="img-fluid"
                                src="/images/branch.svg"
                                alt="branch.svg"
                                width={1257} height={79}
                                style={{ height: 'auto' }} />
                        </div>
                        <div className="appjii-web-img-wrap" data-aos="fade-up" data-aos-delay="200">
                            <Image
                                className="img-fluid"
                                src="/images/appjii-web.jpg"
                                alt="appjii-web.jpg" width={1295}
                                height={807}
                                style={{ height: 'auto' }} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnePlaceConversation