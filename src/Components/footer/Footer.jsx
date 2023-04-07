import React from "react";
import { Link } from "react-router-dom";
import reho from "../../assets/images/reho.jpg";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import WhatsApp from "@mui/icons-material/WhatsApp";
import "./footer.css";

import Reach from "../reach/Reach";

const Footer = () => {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer-content">
        <div className="gpt3__footer-content_logo">
          <img src={reho} alt="logo" />
          <h1>Rehoboth Living Faith Mission</h1>
        </div>

        <div className="gpt3__footer-content-text">
          &copy;Copyright RlFM 2022. All Right Reserved. Designed and Developed
          by
          <a
            href="https://wa.me/+2348168465081"
            target="_blank"
            rel="noreferrer"
          >
            <p>Emmanuel ochigbo</p>
          </a>
        </div>

        <div className="gpt3__footer-content-links">
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
          <Link>
            <button>
              <YouTube />
            </button>
          </Link>
          <Link>
            <button>
              <Twitter />
            </button>
          </Link>
        </div>
      </div>
      <Reach />
    </div>
  );
};

export default Footer;
