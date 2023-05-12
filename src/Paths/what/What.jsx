import React from "react";
import { Box } from "@mui/material";
import { useEffect } from "react";

import Footer from "../../Components/footer/Footer";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import "./what.css";
import image7 from "../../assets/images/image7.jpeg";
import image8 from "../../assets/images/image8.jpg";
import db from "../../firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import image9 from "../../assets/images/image9.jpg";
import CircularProgress from "@mui/material/CircularProgress";
import { BlurrImage } from "../../BlurrImage";

const What = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [testimony, setTestimony] = useState("");
  const [spin, setSpin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpin(true);

    try {
      const docRef = await addDoc(collection(db, "testimony"), {
        name: names,
        email: email,
        phone: phone,
        address: address,
        testimony: testimony,
      });
      setSpin(false);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      setSpin(true);
    }

    setNames("");
    setEmail("");
    setAddress("");
    setPhone("");
    setTestimony("");
  };
  return (
    <>
      <Box
        sx={{
          mt: "100px",
          width: { xs: "93%", sm: "93%", md: "85%" },
          marginX: "auto",
          mb: "100px",
        }}
        className="gpt3__what-box"
      >
        <div className="gpt3__what-evan">
          <h1>
            Our Evangelism <span>Team</span>
          </h1>

          <div className="gpt3__what-evan_image">
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
            src={image7}
            punch={1}
      />
              </SwiperSlide>

              <SwiperSlide>
              <BlurrImage
            blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
            src={image8}
            punch={1}
      />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="gpt3__what-evan_text">
            <p>
              Here at Rlfm we follow God's word from the book of Acts 1:8 “But
              ye shall receive power, after that the Holy Ghost is come upon
              you: and ye shall be witnesses unto me both in Jerusalem, and in
              all Judaea, and in Samaria, and unto the uttermost part of the
              earth.”
            </p>
            <q>
              And he saith unto them, Follow me, and I will make you fishers of
              men
            </q>
          </div>
        </div>

        <div className="gpt3__what-testimony">
          <div className="gpt3__what-testimony_content">
          
            <form className="form" onSubmit={handleSubmit}>
              <h2>
                Share Your <span>Testimony</span>
              </h2>

              <input
                placeholder="Name"
                required
                value={names}
                onChange={(e) => setNames(e.target.value)}
              />

              <input
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                placeholder="Phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <textarea
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>

              <textarea
                placeholder="Tell Us About Your Testimony..."
                required
                value={testimony}
                onChange={(e) => setTestimony(e.target.value)}
              ></textarea>

              <button type="submit">
                {spin ? <CircularProgress /> : "Submit"}
              </button>
            </form>

            <div className="gpt3__what-testimony_content_text">
              <p>
                There are lots of voices out there today who will say that there
                is power in simply telling your story. To an extent that is
                true. But our stories alone have little power to inspire or
                change lives. What is more important is figuring out how to use
                our stories to tell God’s story .
              </p>
              <q> a testimony is a miracle of God’s grace.</q>
            </div>
          </div>
        </div>
        <div className="gpt3__what-giving">
          <div className="gpt3__what-giving_texts">
            <h2>
              Giving Unto <span>God</span>
            </h2>
            <p>
              “Bring the whole tithe into the storehouse, that there may be food
              in my house. Test me in this,” says the Lord Almighty, “and see if
              I will not throw open the floodgates of heaven and pour out so
              much blessing that there will not be room enough to store it.” –
              Malachi 3:10
            </p>
            <q>
              Giving does not only precede receiving; it is the reason for it.
              It is in giving that we receive.
            </q>
          </div>
          <div className="gpt3__what-giving_acct">
            <p>4035920017 FCMB Bank</p>
          </div>
        </div>

        <div className="gpt3__what-counsel">
          <div className="gpt3__what-counsel_content">
            <div className="gpt3__what-counsel_image">
              <img src={image9} alt="counselling" />
            </div>

            <div className="gpt3__what-counsel-texts">
              <p>
                Always Remenber you are braver than you believe, stronger than
                you seem , smarter than you think and twice as beautiful as
                you've ever imagine.
              </p>
              <a 
              href="https://wa.me/+234813813450"
              target="_blank"
              rel="noreferrer"
              >
              <button className="btn"> Talk to a counsellor </button>
              </a>

            </div>
          </div>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default What;
