import React, { useRef, useState } from 'react';
import Logo from '../../assets/deep-blue-logo.png';
import plataforma1 from '../../assets/plataforma1.jpg';
import plataforma2 from '../../assets/plataforma2.png';
import plataforma3 from '../../assets/plataforma3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

export default function Painel() {
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
            setActiveIndex(index);
        }
    };

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <div className=" flex-col hidden lg:flex bg-[#150050] w-[50%] h-screen">
            <div className="flex flex-row items-center m-6">
                <img src={Logo} alt="Logo da Deep Blue" className="max-h-12" />
                <h2 className="text-white font-inter font-bold text-[27.72px] ml-1">Deep Blue</h2>
            </div>

            <div className="bg-[#150050] justify-center text-center items-center space-y-8">
                <div className="bg-custom-color rounded-[100%] h-[500px] w-[500px] p-24 mx-auto">
                    <Swiper
                        ref={swiperRef}
                        navigation={false}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper rounded-[100%] max-w-[300px]"
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        onSlideChange={handleSlideChange}
                    >
                        <SwiperSlide>
                            <img src={plataforma1} alt="Slide 1" className="h-[300px] object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={plataforma2} alt="Slide 2" className="h-[300px] object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={plataforma3} alt="Slide 3" className="h-[300px] object-cover" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <p className="text-white font-bold text-2xl font-inter justify-self-center">Dashboard de Monitoramento de Incidentes</p>
                <span className="text-[#F8FAFC] font-inter text-sm">Tudo o que você precisa para sua segurança.</span>

                <div className="pb-8 mt-4 flex justify-center space-x-3">
                    {[0, 1, 2].map((index) => (
                        <button
                            key={index}
                            className={`bg-white rounded-full transition-all duration-300 w-2 h-2 ${activeIndex === index ? 'opacity-100' : 'opacity-50'}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
}
