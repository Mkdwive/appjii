"use client"
import { useState } from 'react';
import Image from 'next/image';
import 'swiper/css'; 
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper'; // Import Swiper type for TypeScript safety

interface SliderData {
    id: number,
    SlideImage: string,
}

const PhoneSlider = ({ slideContent = [] }: { slideContent: SliderData[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    // 1. Create a state to store the active Swiper instance instance
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    // 2. Handle bullet clicks cleanly
    const handleBulletClick = (index: number) => {
        if (swiperInstance) {
            // slideToLoop must be used when loop={true} to avoid index offset bugs
            swiperInstance.slideToLoop(index);
        }
    };

    return (
        <div className='phone-slider-shadow-wrapper relative'>
            <div className='phone-slider relative z-10'>
                <div className='phone-slides-wrapper'>
                    <Swiper
                        className="linear-swiper"
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        speed={1000} 
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        // 3. Save the internal Swiper instance on initial load
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
            <div className='elliptical-shadow'>

            </div>
            {/* CUSTOM BULLET CONTAINER */}
            {slideContent && slideContent.length > 0 && (
                <div 
                    className="custom-pagination-wrapper relative z-50 flex items-center justify-center  w-full"
                    style={{ marginTop: '24px', display: 'flex' }}
                >
                    {slideContent.map((_, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <button
                                key={index}
                                type="button"
                                aria-label={`Go to slide ${index + 1}`}
                                // 4. Connect click handler to index
                                onClick={() => handleBulletClick(index)}
                                className="transition-all duration-300"
                                style={{
                                    display: 'block',
                                    width: '14px',
                                    height: '14px',
                                    minWidth: '10px',
                                    minHeight: '10px',
                                    padding: '0',
                                    margin: '0 4px',
                                    border: 'none',
                                    borderRadius: '50%',
                                    backgroundColor: isActive ? '#7C3AED' : '#E2E8F0',
                                    cursor: 'pointer'
                                }}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    )
}

export default PhoneSlider;
