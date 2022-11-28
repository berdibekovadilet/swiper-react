import React from "react";
import { SwiperItemType } from "./Swiper";
import "./SwiperItem.css";

const SwiperItem: React.FC<SwiperItemType> = ({ imageSrc, imageAlt }) => {
  return (
    <li className="swiper-item">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="swiper-img"
        draggable={false}
      />
    </li>
  );
};

export default SwiperItem;
