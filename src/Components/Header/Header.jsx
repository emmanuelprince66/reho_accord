import { Box } from "@mui/material";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import { motion } from "framer-motion";
import {BlurrImage} from '../../BlurrImage'


import image1 from "../../assets/images/image1.jpg";

import image3 from "../../assets/images/image3.jpg";

import image33 from '../../assets/images/image33.jpg'

import image2b from '../../assets/images/image2b.jpg'
const data = [
  {
    id:1,
    image:image1,
    bigtext:'Welcome to Rehoboth Living Faith Mission',
    colortext:'Where God dwell"s !!!',
    quote:'Happiness is not in the World but In christ..',
    button:'Know more'
  },
  {
    id:2,
    image:image3,
    bigtext:'Welcome to Rehoboth Living Faith Mission',
    colortext:'Happy 5th Year Annivasary  !!!',
    quote:'Like an Eagle we will Soar to Greater heights',
    button:'Know more'
  },
  {
    id:3,
    image:image33,
    bigtext:'Welcome to Rehoboth Living Faith Mission',
    colortext:'To inspire , Impact and Empower  !!!',
    quote:'Celebrate With Us',
    button:'Know more'
  },
  {
    id:4,
    image:image2b,
    bigtext:'Welcome to Rehoboth Living Faith Mission',
    colortext:'We are a family of joy !!!',
    quote:'Celebration is in Our Nature',
    button:'Know more'
  },
]

const Header = () => {
  return (
    <Box sx={{ mt: "68px" }}>
      <section>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          spaceBetween={30}
          effect="fade"
          centeredSlides={true}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={{ clickable: true }}
        >
        
     {
      data.map((items) => {
        return (
          <SwiperSlide className="gdd" key={items.id} >
          <div className="gpt3__header">
            <BlurrImage
            className="gpt3__header-img"
            blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
            src={items.image}
            punch={1}
      />

            <motion.div
              className="gdd"
              animate={{ y: 20, opacity: 1 }}
              initial={{ y: -100, opacity: 0.1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 20 }}
            >
              <div className="gpt3__header-content">
                <h2 className="color-text">
                  {items.bigtext}
                </h2>
                <h4 className="gpt3__header-content-text" >{items.colortext}</h4>
                <p>
                  <q>{items.quote}</q>
                </p>
                <Link to="/who">
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0px 0px 8px #fff",
                      boxShadow: "0px 0px 8px #fff",
                    }}
                    animate={{ x: 0 }}
                    initial={{ x: "-120vw" }}
                    transistion={{
                      delay: 1.3,
                      type: "spring",
                      stiffness: 500,
                    }}
                  >
                    <span>{items.button}</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        )
      })
     }


        </Swiper>
      </section>
    </Box>
  );
};

export default Header;
