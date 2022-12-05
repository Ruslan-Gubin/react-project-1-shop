import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper";
import React, { useState } from "react";

import "./ImagesSlider.scss";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

interface IImagesSliderProps {
  imagesSwiper: string[];
  footer?: boolean
}

const ImagesSlider: React.FC<IImagesSliderProps> = React.memo(
  ({ imagesSwiper, footer = false  }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
      <>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          centeredSlides={true}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          modules={[EffectFade, Autoplay, Navigation, Thumbs, FreeMode]}
          effect="fade"
          className="images-slider"
        >
          {imagesSwiper && imagesSwiper.map((img) => (
            <SwiperSlide key={img}>
             {img && <img src={img} alt="Slider Images" />}
            </SwiperSlide>
          ))}
        </Swiper>
        {footer &&
        <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-footer"
        >
          { imagesSwiper.map((img) => (
            <SwiperSlide key={img}>
              {img !== '' && <img src={img} alt="Slider Images" />}
            </SwiperSlide>
          ))}
        </Swiper>
        }
      </>
    );
  }
);

export { ImagesSlider };
