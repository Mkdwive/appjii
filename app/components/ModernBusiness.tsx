"use client";
import Image from "next/image";
import { useState } from "react";
import { Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { chooseData } from "../homepageData/ModernBusinessData";


const ModernBusiness = () => {
    const [activeTab, setActiveTab] = useState(chooseData[0].eventKey);
    const handleHover = (key: string) => {
        if (typeof window !== "undefined" && window.innerWidth > 1200)
            setActiveTab(key);
    };
    return (

        <div className="container">
            <Tab.Container activeKey={activeTab} onSelect={(k) => k && setActiveTab(k as string)}>
                <div className="row choose-row-gap">
                    <div className="col-lg-6 order-lg-1 order-2 d-lg-none tab-image-mobile">
                        <div className="choose-tab-img position-relative">
                            <Image className="img-fluid" src="/images/better-teeam-collabration.jpg"
                                width={567} height={692}
                                style={{ height: 'auto' }}
                                alt="better-teeam-collabration.jpg" />
                            <div className="choose-tab-info">
                                <Image className="img-fluid w-full" src="/images/team-collabration-msg.jpg"
                                    alt="tab info" width={225} height={185}
                                    style={{ height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1 order-2">
                        <h2 className="common-title" data-aos="fade-right" data-aos-delay="100">Why Modern Businesses Choose
                            appjii Inbox</h2>
                        <p data-aos="fade-right" data-aos-delay="200">
                            Centralize customer communication, improve collaboration, and deliver faster support
                            experiences from one unified omnichannel inbox platform.
                        </p>

                        <Nav variant="pills" className="nav nav-pills choose-tabs flex flex-column">
                            {
                                chooseData.map(({ Icon, id, delay, title, description, eventKey }) => (
                                    <Nav.Item data-aos="fade-right" data-aos-delay={delay} key={id}>
                                        <Nav.Link
                                            eventKey={eventKey}
                                            onMouseEnter={() => handleHover(`${eventKey}`)} >
                                            <div className="choose-tab-item">
                                                <div className="choose-tab-ico">
                                                    <Icon />
                                                </div>
                                                <div>
                                                    <h4 className="choose-tab-title">{title}</h4>
                                                    <p className="choose-tab-para">{description}</p>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                ))
                            }

                        </Nav>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block order-sm-2 order-1" data-aos="fade-left"
                        data-aos-delay="200">
                        <Tab.Content>
                            {
                                chooseData.map(({ eventKey, image, infoImage, id, imageAlt, infoImageAlt }) => (
                                    <Tab.Pane eventKey={eventKey} key={id}>
                                        <div className="choose-tab-img position-relative">
                                            <Image className="img-fluid" src={image}
                                                alt={imageAlt} width={567} height={692}
                                                style={{ height: 'auto' }} />
                                            <div className="choose-tab-info">
                                                <Image className="img-fluid w-full" src={infoImage}
                                                    alt={infoImageAlt} width={225} height={185} style={{ height: 'auto' }} />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                ))
                            }

                        </Tab.Content>
                    </div>
                </div>
            </Tab.Container>
        </div>
    )
}

export default ModernBusiness