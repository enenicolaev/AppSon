import webpDetection from "./utils/webpdetections";
import burgerMenu from "./modules/burger";
import tabs from "./modules/tabs";
import pricingBtns from "./modules/pricing";
import smoothScroll from "./modules/smoothScroll";

import Swiper from 'swiper';
import SwiperCore, { Pagination } from 'swiper/core';
SwiperCore.use([Pagination]);
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import { _qsa, _e, _d } from "./utils/domutil";

document.addEventListener("DOMContentLoaded", () => {

  new Swiper(".swiper-container", {
    spaceBetween: 30,
    loop: true,
    slidesPerView: "auto",
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   });

  webpDetection();
  burgerMenu();
  pricingBtns();
  tabs();
  smoothScroll();
});