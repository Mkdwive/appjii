import Image from 'next/image'
import CommonBtn from './CommonBtn'
const AIFeature = () => {
    return (
        <div className="container-fluid">
            <div className="cta-banner-card ai-banner-card common-union-fade-both">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="manage-inbox-wrap">
                            <Image className="img-fluid"
                                src="/images/manage-inbox-lg.png" alt="Manage Inbox"
                                width={511} height={433}
                                style={{ height: 'auto' }}
                            />
                            <div className="manage-mail-icon">
                                <svg width="63" height="52" viewBox="0 0 63 52" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_313_18)">
                                        <path
                                            d="M53.3173 23.4369V44.773C53.3173 47.7005 50.93 50.0674 47.9901 50.0674H6.71748C3.77187 50.0674 1.39032 47.6948 1.39032 44.773V14.1391C1.39032 11.2116 3.77757 8.84473 6.71748 8.84473H38.7773"
                                            stroke="#3E16C3" strokeWidth={4.86} strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M1.38452 17.3613L27.348 30.9569L40.3725 24.1393" stroke="#3E16C3"
                                            strokeWidth={4.86} strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M57.0034 12.4626C58.3537 11.2226 59.9547 10.2486 61.7209 9.62574C62.4559 9.36526 62.4559 8.3347 61.7209 8.07422C59.9547 7.45135 58.3537 6.47741 57.0034 5.23733C55.7557 3.89533 54.7757 2.30418 54.149 0.548819C53.8869 -0.181638 52.8499 -0.181638 52.5879 0.548819C51.9611 2.30418 50.9812 3.89533 49.7334 5.23733C48.3831 6.47741 46.7821 7.45135 45.0159 8.07422C44.2809 8.3347 44.2809 9.36526 45.0159 9.62574C46.7821 10.2486 48.3831 11.2226 49.7334 12.4626C50.9812 13.8046 51.9611 15.3958 52.5879 17.1511C52.8499 17.8816 53.8869 17.8816 54.149 17.1511C54.7757 15.3958 55.7557 13.8046 57.0034 12.4626Z"
                                            fill="#3E16C3" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_313_18">
                                            <rect width="62.2736" height="51.4434" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <h2 className="cta-banner-title fz-48 common-title  " data-aos="fade-up"
                                data-aos-delay="100">
                                AI That Helps Manage The Inbox Automatically

                            </h2>
                            <div className="start-ico">
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.6284 18.6284C20.6345 16.7747 23.0131 15.3188 25.6371 14.3877C26.729 13.9983 26.729 12.4578 25.6371 12.0684C23.0131 11.1373 20.6345 9.68137 18.6284 7.82762C16.7747 5.82152 15.3188 3.44297 14.3877 0.818948C13.9983 -0.272983 12.4578 -0.272983 12.0684 0.818948C11.1373 3.44297 9.68137 5.82152 7.82762 7.82762C5.82152 9.68137 3.44297 11.1373 0.818948 12.0684C-0.272983 12.4578 -0.272983 13.9983 0.818948 14.3877C3.44297 15.3188 5.82152 16.7747 7.82762 18.6284C9.68137 20.6345 11.1373 23.0131 12.0684 25.6371C12.4578 26.729 13.9983 26.729 14.3877 25.6371C15.3188 23.0131 16.7747 20.6345 18.6284 18.6284Z"
                                        fill="white" />
                                </svg>
                            </div>
                        </div>

                        <p className="cta-banner-desc text-start" data-aos="fade-up" data-aos-delay="200">
                            The platform also uses AI to intelligently manage inbox operations.
                        </p>
                        <p className="cta-banner-desc text-start" data-aos="fade-up" data-aos-delay="300">
                            AI continuously analyzes conversations, intent, urgency, sentiment, and activity
                            patterns to help teams prioritize and organize communication.
                        </p>
                        <div className="cta-group mx-0 justify-content-start" data-aos="fade-up" data-aos-delay="300">
                            <CommonBtn
                                path='#'
                                title='Start Free Beta'
                                variant='primary'
                            />
                            <CommonBtn
                                path='#'
                                title='Book Demo'
                                variant='outline'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AIFeature   