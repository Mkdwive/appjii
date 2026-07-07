"use client"
import Image from 'next/image';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'; // Ensure this stylesheet import is active
import { Autoplay, EffectFade } from 'swiper/modules'; // Add the EffectFade module
import { Swiper, SwiperSlide } from 'swiper/react';

interface SliderData {
    id: number,
    SlideImage: string,
}

const PhoneSlider = ({ slideContent = [] }: { slideContent: SliderData[] }) => {
    return (
        <div className='phone-slider relative z-10'>
            <div className='phone-slides-wrapper'>
                <Swiper
                    className="linear-swiper"
                    modules={[Autoplay, EffectFade]} // Active the Fade effect system module
                    effect="fade" // Eliminates the horizontal layout motion that crops background layers
                    fadeEffect={{ crossFade: true }} // Ensures seamless underlying image rendering
                    slidesPerView={1}
                    spaceBetween={0}
                    speed={600}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                >
                    {slideContent.map(({ id, SlideImage }) => {
                        return (
                            <SwiperSlide key={id}>
                                <div className="comm-img-wrapper">
                                    <Image 
                                        className="img-fluid d-block mx-auto" 
                                        src={`${SlideImage}`}
                                        alt="comm-mobile.png" 
                                        width={374} 
                                        height={775}  
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default PhoneSlider;
