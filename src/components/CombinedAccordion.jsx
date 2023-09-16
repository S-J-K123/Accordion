import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const MuiAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>01 History</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>02 Team</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
 
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mui-container">
      <div className="content">
        {windowWidth <= 758 ? <MuiAccordion /> : null}
        {windowWidth > 758 ? (
          <nav>
            <ul>
              <li className="history">
                <a className="history" href="">01. History</a>{" "}
              </li>
              <li className="team">
                <a className="team" href="">02. Team</a>{" "}
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
};

export default App;
