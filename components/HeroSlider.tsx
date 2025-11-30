'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
  return (
    <div className="w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/img/agency1.jpg')" }}
          >
            <div className="px-10 max-w-4xl">
              <h1 className="text-5xl font-bold text-white drop-shadow-xl">
                Criamos experiências digitais que transformam
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/img/agency2.jpg')" }}
          >
            <div className="px-10 max-w-4xl">
              <h1 className="text-5xl font-bold text-white drop-shadow-xl">
                Design premium para marcas que querem crescer
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/img/agency3.jpg')" }}
          >
            <div className="px-10 max-w-4xl">
              <h1 className="text-5xl font-bold text-white drop-shadow-xl">
                Sites rápidos, modernos e com impacto visual
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
