import { Box, Stack } from "@mui/material";
import React from "react";
import image4 from "../../assets/images/image4.jpg";
import "./FirstFruit.css";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const StyledText = styled(Typography)({
  fontFamily: "Montserrat, sans-serif",
});

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const FirstFruit = () => {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/what");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="gpt3__firstfruit">
      <Stack
        direction="row"
        alignContent="center"
        justifyContent="center"
        className="gpt3__firstfruit-full"
      >
        <Box className="gpt3__firstfruit-fuller">
          <img
            src={image4}
            alt="First fruit"
            className="gpt3__firstfruit-img"
          />
          <div className="gpt3__firstfruit-content">
            <h1>Payment of First Fruit:</h1>
            <h1>Secret of Overwhelming blessing</h1>
            <p>
              The Bible is complete with virtually inexhaustible provisions for
              Man’s comfort here on earth and in eternity. The oldest singular
              limitation is Man’s refusal to simply obey the WORD of GOD. 3 John
              2 for instance reaffirmed God’s persistent intention and plan for
              man: Beloved, I wish above all things that thou mayest prosper and
              be in health, even as thy soul prosperity. However, God not
              wanting to appear to man as a Dictator, grants man the freewill to
              enjoy virtually endless benefits ONLY on the condition of total
              obedience, to the giver of these benefits -The Almighty GOD.
            </p>
            <Box className="gpt3__firstfruit-button">
              <button onClick={handleClickOpen}>Read More</button>
              <BootstrapDialog
                className="scale-up-center"
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <BootstrapDialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                >
                  <StyledText
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "20px",
                      color: "#042c54",
                    }}
                  >
                    Giving In Christ
                  </StyledText>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                  <StyledText
                    variant="p"
                    gutterBottom
                    sx={{ lineHeight: "24px" }}
                  >
                    The Bible is complete with virtually inexhaustible
                    provisions for Man’s comfort here on earth and in eternity.
                    The oldest singular limitation is Man’s refusal to simply
                    obey the WORD of GOD. 3 John 2 for instance reaffirmed God’s
                    persistent intention and plan for man: Beloved, I wish above
                    all things that thou mayest prosper and be in health, even
                    as thy soul prosperity. However, God not wanting to appear
                    to man as a Dictator, grants man the freewill to enjoy
                    virtually endless benefits ONLY on the condition of total
                    obedience, to the giver of these benefits.
                  </StyledText>
                </DialogContent>
              </BootstrapDialog>
              <button onClick={handleClick}> Pay First Fruit </button>
            </Box>
          </div>
        </Box>
      </Stack>
    </div>
  );
};

export default FirstFruit;
