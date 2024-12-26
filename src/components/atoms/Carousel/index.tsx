"use client";
import { forwardRef, DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { Navigation, Pagination, Scrollbar, Keyboard } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss";

const CAROUSEL_NAME = "Carousel";

const DivBackground = styled.div`
  background: var(--bg-primary);
  height: var(--h-full);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
`;

const DivBase = styled.div`
  width: 50em;
`;

export const optionSwiperDefault: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 8,
  initialSlide: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: null,
    prevEl: null,
  },
  scrollbar: { draggable: true, dragSize: 24 },
  pagination: {
    enabled: false,
  },
};

export interface ItemImageCarousel {
  /**
   * Title in item
   */
  title: string;
  /**
   * source url make background
   */
  src: string;
  /**
   * alt in item
   */
  alt: string;
}

export type ContentProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /**
   * list item make carousel
   */
  list: Array<ItemImageCarousel>;
  /**
   * className customs style
   */
  className?: string;
  /**
   * option config swiper
   */
  optionSwiper?: SwiperOptions;
};
const Carousel = forwardRef<HTMLDivElement, ContentProps>(
  ({ list, className, optionSwiper = optionSwiperDefault, ...prop }, ref) => {
    return (
      <DivBase className={className} {...prop}>
        <Swiper
          {...optionSwiper}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        >
          {list.map((item: ItemImageCarousel, index: number) => {
            const { title, src, alt } = item;
            return (
              <SwiperSlide key={index + title}>
                <DivBackground
                  title={title}
                  aria-label={alt}
                  style={{ background: `url("${src}")` }}
                ></DivBackground>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </DivBase>
    );
  },
);

Carousel.displayName = CAROUSEL_NAME;

export default Carousel;
