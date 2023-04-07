import React from "react";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

import "./Admin.css";
import { useAuth } from "../../Components/auth";
import Footer from "../../Components/footer/Footer";

const Admin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [spin, setSpin] = useState(false);
  const [open] = useState(true);
  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();
  const auth = useAuth();

  const ShowAlert = () => {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <Collapse in={open}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlert(false);
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Incorrect Password...
            </Alert>
          </Collapse>
        </Box>
      </div>
    );
  };
  const passcode = process.env.REACT_APP_PASSWORD;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpin(true);
    if (password === passcode) {
      auth.login(user);
      navigate("/saved");
      setUser("");
      setPassword("");
      setSpin(false);
    } else {
      setAlert(true);
      setSpin(false);
      setUser("");
      setPassword("");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Box
        sx={{
          mt: "100px",
          width: { xs: "93%", sm: "93%", md: "85%" },
          marginX: "auto",
        }}
      >
        <div className="gpt3__admin">
          <form className="form" onSubmit={handleSubmit}>
            <h2>
              {" "}
              <span>Admin</span>
            </h2>
            {alert ? <ShowAlert /> : ""}
            <input
              placeholder="Name"
              required
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn" type="submit">
              {spin ? <CircularProgress /> : "Login"}
            </button>
          </form>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default Admin;
