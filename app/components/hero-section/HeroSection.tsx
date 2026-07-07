import Image from 'next/image'
import CommunicationBox from '../CommunicationBox'
import MessWave from '../MessWave'
import CommonBtn from '../CommonBtn'
const HeroSection = () => {
    return (

        <div className="hero-section position-relative">
            {/* <canvas id="gradient-canvas" width="1920" height="600" className="isLoaded"></canvas> */}
            <MessWave />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="hero-content mx-auto text-center">
                            <h1 className="hero-title fz-58" data-aos="fade-up" data-aos-duration="1000"
                                data-aos-delay="0" data-aos-easing="ease-out-cubic">
                                One Inbox For Every Customer Conversation
                            </h1>

                            <p className="hero-subtitle fz-20" data-aos="fade-up" data-aos-duration="1000"
                                data-aos-delay="150" data-aos-easing="ease-out-cubic">
                                Manage Email, WhatsApp, SMS, Website Chat, Facebook Messenger, Instagram Messenger,
                                and Website Forms - from a single modern communication platform.
                            </p>

                            <div className="cta-group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                                data-aos-easing="ease-out-cubic">
                                <CommonBtn
                                    path="#"
                                    title='Start Free Beta'
                                    variant='primary'
                                />
                                <CommonBtn
                                    path="#"
                                    title='Book Demo'
                                    variant='outline'
                                />
                            </div>
                            <div className="hero-absolute-content ">
                                <div className="hero-dashboard-preview" data-aos="zoom-in-up" data-aos-duration="1200"
                                    data-aos-delay="450" data-aos-easing="ease-out-cubic">
                                    <Image className="img-fluid" src="/images/hero-img.png"
                                        alt="Appjii Application UI showing universal customer conversation inbox workspace"
                                        width={800}
                                        height={400}
                                        style={{ height: 'auto' }}
                                        loading="eager" />
                                    <CommunicationBox />
                                    <div className="search-image-box" data-aos="fade-up" data-aos-delay="1000"
                                        data-aos-duration="1200" data-aos-easing="ease-out-back">
                                        <Image className="img-fluid" src="/images/image-box-section.svg"
                                            alt="image-box-section" width={800} height={400}
                                            style={{ height: 'auto' }} />
                                    </div>
                                    <div className="channels-container" data-aos="fade-up" data-aos-duration="1000"
                                        data-aos-delay="650" data-aos-easing="ease-out-cubic">

                                        <p className="channels-title fz-18">
                                            Supported Channels
                                        </p>


                                        <ul className="channels-list fz-14">
                                            <li className="channel-tag whatsApp" data-aos="fade-up"
                                                data-aos-delay="750">
                                                WhatsApp</li>
                                            <li className="channel-tag email" data-aos="fade-up" data-aos-delay="800">
                                                Email</li>
                                            <li className="channel-tag sms" data-aos="fade-up" data-aos-delay="850">SMS
                                            </li>
                                            <li className="channel-tag messenger" data-aos="fade-up"
                                                data-aos-delay="900">
                                                Messenger
                                            </li>
                                            <li className="channel-tag instagram" data-aos="fade-up"
                                                data-aos-delay="950">
                                                Instagram
                                            </li>
                                            <li className="channel-tag live-chat
                                        " data-aos="fade-up" data-aos-delay="1000">Live Chat
                                            </li>
                                            <li className="channel-tag forms" data-aos="fade-up" data-aos-delay="1050">
                                                Forms
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <Wave/> */}
        </div>
    )
}

export default HeroSection