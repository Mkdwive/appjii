"use client"
import Image from 'next/image'
import { Tab, Nav } from "react-bootstrap";
import { aiFeaturesData } from '../homepageData/aiFeaturesData';
const SmarterCustomerCommunication = () => {
    return (

        <div className="ai-showcase-section bg-white pt-0">
            <div className="ai-tabs-section pb-0 pt-0 ">
                <div className="container text-left">
                    <h2 className="features-title fz-48 common-title">
                        Smarter Customer Communication Powered By AI
                    </h2>
                    <Tab.Container defaultActiveKey="assistance">
                        <div className="row g-xl-5 g-4">
                            <div className="col-sm-12">

                                <Nav variant="pills" className="nav nav-pills fz-14">
                                    {
                                        aiFeaturesData.map(({ id, eventKey, tabTitle }) => (
                                            <Nav.Item key={id}>
                                                <Nav.Link
                                                    eventKey={eventKey}
                                                >{tabTitle}</Nav.Link>
                                            </Nav.Item>
                                        ))
                                    }

                                </Nav>
                            </div>
                            <div className="col-lg-6">
                                <Tab.Content>
                                    {
                                        aiFeaturesData.map(({ id, eventKey, features }) => (
                                            <Tab.Pane eventKey={eventKey} key={id}>
                                                <div className="row g-lg-5 gx-sm-4 gy-4 ">

                                                    <div className="col-lg-12">
                                                        <div className="row ai-feature-row-gap">
                                                            {
                                                                features.map(({ id, Icon, delay, description, title }) => (
                                                                    <div className="col-sm-6" key={id}>
                                                                        <div className="ai-feature-row" data-aos="fade-right"
                                                                            data-aos-delay={delay}>
                                                                            <div className="ai-feature-icon">
                                                                                {
                                                                                    Icon
                                                                                }

                                                                            </div>
                                                                            <div className="ai-feature-text">
                                                                                <h4 className="fz-16">{title}</h4>
                                                                                <p className="fz-14">{description}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        ))
                                    }
                                </Tab.Content>
                            </div>
                            <div className="col-lg-6">
                                <div className="tab-image-frame">
                                    <div className="overflow-hidden">
                                        <Image
                                            className="img-fluid" src="/images/team-work-smarter.jpg"
                                            alt="Team analyzing a large corporate AI Assistant screen interface in a collaborative conference room setup"
                                            loading="eager"
                                            width={624}
                                            height={574}
                                            style={{ height: 'auto' }}
                                        />
                                    </div>
                                    <div className="assistance-sm-img">
                                        <Image
                                            className="img-fluid" src="/images/ai-assistance-small-img-v1.png"
                                            alt="AI assistance interface"
                                            loading="eager"
                                            width={196}
                                            height={154}
                                            style={{ height: 'auto' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}

export default SmarterCustomerCommunication