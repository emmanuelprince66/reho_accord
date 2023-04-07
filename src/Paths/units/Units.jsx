import React from "react";
import { useEffect } from "react";

import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import { BlurrImage } from "../../BlurrImage";
import image10 from "../../assets/images/image10.jpg";
import image11 from "../../assets/images/image11.jpg";
import image12 from "../../assets/images/image12.jpg";
import image13 from "../../assets/images/image13.jpg";
import image16 from "../../assets/images/image16.jpg";
import image17 from "../../assets/images/image17.jpg";
import image21 from "../../assets/images/image21.jpg";
import image2b  from '../../assets/images/image2b.jpg'
import image34 from '../../assets/images/image34.jpg'
import image35 from '../../assets/images/image35.jpg'




import "./Units.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Footer from "../../Components/footer/Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid #042c54",
}));

const Units = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box
        sx={{
          mt: "100px",
          width: { xs: "93%", sm: "93%", md: "85%" },
          marginX: "auto",
          mb: "100px",
        }}
      >
        <Box className="gpt3__units-chior" sx={{ mb: "5rem" }}>
          <h1>
            Living Spring <span>Chior</span>
          </h1>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Item>
                  <div className="gpt3__units-chior_content-img_item">
                    <Swiper
                      modules={[Navigation, Pagination, EffectFade, Autoplay]}
                      spaceBetween={10}
                      effect="fade"
                      centeredSlides={true}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      navigation={false}
                      pagination={{ clickable: true }}
                    >
                      <SwiperSlide>
                                <BlurrImage
                      blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
                       src={image11}
                      punch={1}
                      />
                      </SwiperSlide>

                      <SwiperSlide>
                      <BlurrImage
                      blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
                       src={image34}
                      punch={1}
                      />
                      </SwiperSlide>

                      <SwiperSlide>
                      <BlurrImage
                      blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
                       src={image35}
                      punch={1}
                      />
                      </SwiperSlide>

                      <SwiperSlide>
                      <BlurrImage
                      blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
                       src={image12}
                      punch={1}
                      />
                      </SwiperSlide>

                      <SwiperSlide>
                      <BlurrImage
                      blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
                       src={image13}
                      punch={1}
                      />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} md={4}>
                <Item>
                  <div className="gpt3__units-chior_content-img_item1">
                  <BlurrImage
                      blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
                       src={image10}
                      punch={1}
                      />
                    <p>
                      Mr Paul Abraham is a Great Spirit Filled Minister of God ,
                      he's the current Music Director of Rehoboth Living Spring
                      Choir.he is highly Skilled in playing the piano and other
                      musical instruments and he loves every opportuinity that
                      invovles him sharing his knowledge of music.
                    </p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} md={12}>
                <Item>
                  <h3>About us</h3>
                  <p>
                    The Living Spring Chior are the Gifted voices of rehoboth
                    living faith mission. They are always ready to be used by God
                    to bring down his divine manifestation through the use of
                    heavenly songs
                  </p>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box className="gpt3__units-chior" sx={{ mb: "5rem" }}>
          <h1>
            Children <span> Department</span>
          </h1>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Item>
                  <div className="gpt3__units-chior_content-img_item">
                    <Swiper
                      modules={[Navigation, Pagination, EffectFade, Autoplay]}
                      spaceBetween={10}
                      effect="fade"
                      centeredSlides={true}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      navigation={false}
                      pagination={{ clickable: true }}
                    >
                      <SwiperSlide>
                      <BlurrImage
                      blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
                       src={image2b}
                      punch={1}
                      />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={image16} alt="evan" />
                      </SwiperSlide>

                      <SwiperSlide>
                      <BlurrImage
                      blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
                       src={image17}
                      punch={1}
                      />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} md={4}>
                <Item>
                  <div className="gpt3__units-chior_content-img_item2">
                  <BlurrImage
                      blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
                       src={image21}
                      punch={1}
                      />
                    <p>
                      Minister Damilola is a spirit-filled gifted children
                      co-ordinator, from her first moments in the church God
                      opened her eyes to see the needs of the church and ever
                      since then she had served as the children's teacher
                      joyfully and help naviagte the path of the kids towards
                      christ.
                    </p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} md={12}>
                <Item>
                  <h3>About us</h3>
                  <p>
                    The Children's Deparment is a joyful part of the church that
                    consist mainly of kids that are been taught to serve God the
                    right fun loving way{" "}
                  </p>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Units;
