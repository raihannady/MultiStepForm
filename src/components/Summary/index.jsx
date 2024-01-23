import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import classes from "./style.module.scss";

const Summary = ({ stepHandler, backHandler }) => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginY: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <h1>Finishing Up</h1>
          <p className={classes.subtitle}>
            Double-check everything looks OK before confirming
          </p>
          <Box
            component="form"
            //   onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Box>
              <Box className={classes.summary}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    borderBottom: "1px solid gray",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      marginY: "1rem",
                    }}
                  >
                    <Box>Arcade (Monthly)</Box>
                    <Box>Change</Box>
                  </Box>
                  <Box>$9/mo</Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      marginY: "1rem",
                    }}
                  >
                    <Box>Online service</Box>
                    <Box>+$1/mo</Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      marginY: "1rem",
                    }}
                  >
                    <Box>Larger Storage</Box>
                    <Box>+$2/mo</Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  padding: "1rem",
                }}
              >
                <Box>Total (per month)</Box>
                <Box>+$12/mo</Box>
              </Box>
            </Box>
            <div className={classes.buttonLayout}>
              <Button
                // variant="contained"
                onClick={backHandler}
                sx={{ mt: 3, mb: 2 }}
                className={classes.buttonBack}
              >
                Go Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={stepHandler}
                className={classes.buttonNext}
              >
                Next Step
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Summary;
