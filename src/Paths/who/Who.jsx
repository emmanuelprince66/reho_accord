import React from "react";
import { useEffect } from "react";
import "./who.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import WhatsApp from "@mui/icons-material/WhatsApp";

import image5 from "../../assets/images/image5.jpg";
import image18 from "../../assets/images/image18.jpg";
import image19 from "../../assets/images/image19.jpg";
import image20 from "../../assets/images/image20.jpg";
import { BlurrImage } from "../../BlurrImage";

import Footer from "../../Components/footer/Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid #e1e5f8",
}));

const Who = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box
        sx={{
          mt: "100px",
          width: { xs: "93%", sm: "93%", md: "75%" },
          marginX: "auto",
          mb: "100px",
        }}
      >
        {/*  for our history div */}
        <div className="gpt3__who-history">
          <h1>
            Our <span>History</span>{" "}
          </h1>

          <div className="gpt3__who-history_content">
            <div className="gpt3__who-history_content-image">
                 <BlurrImage
            blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
            src={image5}
            punch={1}
      />

            </div>

            <div className="gpt3__who-history_content-text">
              <h2>Pastor Paul Adeola Adewodun</h2>
              <p>
                Rehoboth living faith mission started as a small group for
                ministry in 2011 in lagos with few members of the family and
                friends in the neighbourhood through the leadership of
                rev(pastor) paul adeola adewodun.
                <br />a diversion with instruction from God took place in late
                2011 for ministry in ibadan,which lasted till september 28 ,
                2015. it was a bit difficult task and decision to make,
                unknowingly to us that it was just the beginning of a journey to
                fulfilment of the vision witnessed and blessed by all and sundry
                today.
              </p>
              <p>
                rev pastor A.P Adewodun a servant of our lord jesus christ saved
                by his grace since the year 1988 with an evident of prophetic
                and apostolic teaching anointing.he grew as a member and
                minister with the redeemed christain church of God for 12years.
              </p>

              <div className="gpt3__who-history_content-text_links">

              <a
            href="https://wa.me/+234813813450"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <WhatsApp />
            </button>
          </a>

          <a
            href="https://www.facebook.com/rehoboth.livingfaithmission"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <Facebook />
            </button>
          </a>

                <Link>
                  <button>
                    <Instagram />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* for history div ends */}

        <div className="gpt3__who-founding">
          <h2>
            Founding <span>Fathers</span>
          </h2>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Item>
                  <div className="gpt3__who-founding_content">
                    <img src={image19} alt="" />
                    <p>Pastor E.A. Adeboye</p>
                    <small>Father Of Faith</small>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} md={4}>
                <Item>
                  <div className="gpt3__who-founding_content">
                    <img src={image18} alt="" />
                    <p>Bishop David Oyedepo</p>
                    <small>Father Of Faith</small>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} md={4}>
                <Item>
                  <div className="gpt3__who-founding_content">
                    <img src={image20} alt="" />
                    <p>Chief Claudius A. Adewodun</p>
                    <small>Father Of Faith</small>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>

        {/*div for mission and vision  */}
        <div className="gpt3__who-mission">
          <h1>
            Mission And <span>Vision</span>{" "}
          </h1>
          <div className="gpt3__who-mission_text">
            <p>To be rapturable.</p>
            <p>To make souls rapturable.</p>
            <p>create a large room of fruitfulness and rest.</p>
            <p>
              to inspire you with a sense of purpose of existence through
              revelational teaching.
            </p>
            <p>
              to impart you with the word of God humbly creating self discovery.
            </p>
            <p>
              to empower , develope , release and maximize our potential in God
              .
            </p>
            <q>to inspire to impact and to empower.</q>
          </div>
        </div>
        {/*div for mission and vision  ends */}

        {/* div for our belief  */}
        <div className="gpt3__who-mission">
          <h1>
            Our <span>Beliefs</span>{" "}
          </h1>

          <div className="gpt3__who-mission_text">
            <p>
              We believe that the bible is God's inspired Word.it is accurate
              ,authoritative and applicable to our every day lives.
            </p>
            <p>
              we belive in one enternal God who is the creator of all things.he
              exists in three persons(TRINITY) , God the father , God the son
              and God the holy spirit.
            </p>
            <p>
              we believe that the lord jesus is the son of God, the only one who
              reconcile us to God.
            </p>
            <p>
              we believe in the death and ressurection of our lord jesus christ
              through shedding of his blood on calvary for the remission of our
              sin.
            </p>
            <p>
              we believe that the condemed by sin shall be cast into hell but
              the forgiven and just shall inherit the kingdom of God in heaven.
            </p>
            <p>
              we believe that God wants to heal and and transform us, so that we
              can live healthy and prosperous lives in other to help others more
              effectively.
            </p>

            <q>serve the lord with all your heart and in utmost sincerity.</q>
          </div>
        </div>
        {/* div for our belief ends */}
        {/* div for our structure */}
        <div className="gpt3__who-mission">
          <h1>
            The Church <span>Structure</span>{" "}
          </h1>

          <div className="gpt3__who-mission_text">
            <p>
                There is still an undergoing construction and renovation 
                in some core areas of the church,
                if God lays it in your heart to be part of building his vine vard
                you shall surely be blessed as you do so below,
                for God do not forget those that helped layed the bricks for his church.
            </p>
            <q>for it is more blessed to give than to recieve.</q>


            <Link to="/what">
              <button>Give to God's Work</button>
            </Link>
          </div>
        </div>
        {/* div for our structure */}
      </Box>
      <Footer />
    </>
  );
};

export default Who;
