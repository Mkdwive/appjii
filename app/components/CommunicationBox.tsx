"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay'; 
const CommunicationBox = () => {
    interface CommunicationOption {
        id: number,
        name: string,
        icon: string,
        text: string
    }

    const communicationChannels: CommunicationOption[] = [
        {
            id: 1,
            name: "Email",
            icon: "/images/gmail-ico.png",
            text: "Connect a Gmail account to your inbox."
        },
        {
            id: 2,
            name: "Microsoft Outlook",
            icon: "/images/outlook-ico.png",
            text: "Connect a Microsoft Outlook account to your inbox"
        },
        {
            id: 3,
            name: "WhatsApp",
            icon: "/images/whatsapp-ico.png",
            text: "Start receiving WhatsApp conversations in your inbox"

        },

        {
            id: 4,
            name: "Insta Messenger",
            icon: "/images/insta-ico.png",
            text: "Start receiving Messenger conversations."

        },
        {
            id: 5,
            name: "Chat",
            icon: "/images/chat-ico.png",
            text: "Connect live chat and engage with your visitors "

        },
        {
            id: 6,
            name: "SMS",
            icon: "/images/sms-ico.png",
            text: "Easily manage and reply to team emails directly."

        },


    ];


    return (
        <div className='communication-box-wrapper'>
            <Swiper
                slidesPerView={1}
                 spaceBetween={0}
                   modules={[Autoplay]} 
                    autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false, 
                    pauseOnMouseEnter: true, 
                }}
            >
                {
                    communicationChannels.map(({ id, icon, name, text }) => {
                        return (
                            <SwiperSlide key={id} >
                                <div className="gmail-box communation-inner-box" >
                                    <div className="gmail-ico">
                                        <Image className="img-fluid d-block mx-auto"
                                            src={`${icon}`}
                                            alt={name} width={50}
                                            height={50} 
                                              style={{ height: 'auto' }}
                                            />
                                    </div>
                                    <span className="gmail-label">{name}</span>
                                    <p>{text}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>


    )
}

export default CommunicationBox