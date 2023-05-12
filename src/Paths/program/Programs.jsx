import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./programs.css";
import Confetti from "../../assets/images/confetti-gif.gif";
import Footer from "../../Components/footer/Footer";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  fontFamily: "Montserrat, sans-serif",
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  fontWeight: "bolder",
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, day, time, location) {
  return { name, day, time, location };
}

const rows = [
  createData(
    "Prayer Warrior Vigil",
    "Monday",
    "12am - 2am",
    "Church Auditorium"
  ),
  createData("Evening Service", "Wednesday", "5pm - 7pm", "Church Auditorium"),
  createData(
    "Awake My Morning Glory",
    "Thursday",
    "5am - 7am",
    "Church Auditorium"
  ),
  createData("Holy Ghost Service", "Friday", "5pm- 8pm", "Church Auditorium"),
  createData(
    "Adorataion Service",
    "Sunday",
    "8am - 11:30am",
    "Church Auditorium"
  ),
  createData(
    "House Fellowship",
    "Sunday",
    "4pm - 6pm",
    ""
  ),
];

const Programs = () => {
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
          mb: "100px",
        }}
      >
        <div className="gpt3__programs-weekly">
          <h2>
            Weekly <span> Programs</span>
          </h2>
          <div className="gpt3__programs-weekly_content">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Our Programs</StyledTableCell>
                    <StyledTableCell align="right">Day</StyledTableCell>
                    <StyledTableCell align="right">Time&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">
                      Location&nbsp;
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.day}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.time}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.location}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

        <div className="gpt3__programs-yearly">
          <h2>
            Yearly <span> Program</span>
          </h2>

          <div className="gpt3__programs-yearly_image">
            <img src={Confetti} alt="" />
            <div className="gpt3__programs-yearly_image-text">
              <p>
                We Celebrate our Golden Annivary Yearly , it Stretches From the
                5th till the 7th of October Which is Our Month Of Adoration.{" "}
              </p>
            </div>
          </div>
        </div>
      </Box>

      <Footer />
    </div>
  );
};

export default Programs;
