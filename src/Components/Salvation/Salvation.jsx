import React from "react";
import "./salvation.css";
import db from "../../firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

import CircularProgress from "@mui/material/CircularProgress";

const Typo = styled(Typography)({
  color: "#8aa4fc",
  fontWeight: 900,
  fontFamily: "Montserrat , sans-serif",
});
const Text = styled(Typography)({
  fontFamily: "Montserrat , sans-serif",
});

const Salvation = () => {
  const [spin, setSpin] = useState(false);
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [prayer, setPrayer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpin(true);

    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name: names,
        email: email,
        phone: phone,
        address: address,
        landmark: landmark,
        prayer: prayer,
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
    setLandmark("");
    setPhone("");
    setPrayer("");
  };

  return (
    <div className="gpt3__salvation">
      <h1>
        Steps To <span className="gpt3__salvation-span">Salvation</span>
      </h1>

      <div className="gpt3__salvation-content">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Contact Us </h2>

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

          <input
            placeholder="Closest Landmark"
            required
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />

          <textarea
            placeholder="Prayer Request"
            required
            value={prayer}
            onChange={(e) => setPrayer(e.target.value)}
          ></textarea>

          <button type="submit">
            {spin ? <CircularProgress /> : "Submit"}
          </button>
        </form>

        <div className="gpt3__salvation-content_accordion">
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" sx={{ mb: "50px" }}>
              <CardContent>
                <Typo gutterBottom>
                  - Acknowledge all your sins Acts 2:36 - 38
                </Typo>
                <Text variant="body2">
                  Therefore let all the house of Israel know assuredly, that God
                  hath made the same Jesus, whom ye have crucified, both Lord
                  and Christ. 37 Now when they heard this, they were pricked in
                  their heart, and said unto Peter and to the rest of the
                  apostles, Men and brethren, what shall we do? 38 Then Peter
                  said unto them, Repent, and be baptized every one of you in
                  the name of Jesus Christ for the remission of sins, and ye
                  shall receive the gift of the Holy Ghost.
                  <br />
                  {'"a benevolent smile"'}
                </Text>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent>
                <Typo gutterBottom>- Repent of those sins. Act 3:19</Typo>
                <Text variant="body2">
                  Repent ye therefore, and be converted, that your sins may be
                  blotted out, when the times of refreshing shall come from the
                  presence of the Lord. If we confess our sins, he is faithful
                  and just to forgive us our sins, and to cleanse us from all
                  unrighteousness.
                  <br />
                  {'"God is  Merciful "'}
                </Text>
              </CardContent>
            </Card>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Salvation;
