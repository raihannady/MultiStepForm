import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import classes from "./style.module.scss";

const AddOns = ({ stepHandler, backHandler }) => {
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
          <h1>Pick add-ons</h1>
          <p className={classes.subtitle}>
            Add-ons help enhance your gaming experience
          </p>
          <Box sx={{ mt: 1 }}>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                paddingY: "10px",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  paddingY: "10px",
                }}
              >
                <Box>
                  <Checkbox />
                </Box>
                <Box>
                  <h5>Online service</h5>
                  <h5>Access to multiplayer games</h5>
                </Box>
              </Box>
              <Box
                sx={{
                  marginX: "1rem",
                }}
              >
                <h5>+$1/mo</h5>
              </Box>
            </Box>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                paddingY: "10px",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  paddingY: "10px",
                }}
              >
                <Box>
                  <Checkbox />
                </Box>
                <Box>
                  <h5>Larger Storage</h5>
                  <h5>Extra 1TB of cloud save</h5>
                </Box>
              </Box>
              <Box
                sx={{
                  marginX: "1rem",
                }}
              >
                <h5>+$1/mo</h5>
              </Box>
            </Box>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                paddingY: "10px",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  paddingY: "10px",
                }}
              >
                <Box>
                  <Checkbox />
                </Box>
                <Box>
                  <h5>Customizeable Profile</h5>
                  <h5>Custom theme on your profile</h5>
                </Box>
              </Box>
              <Box
                sx={{
                  marginX: "1rem",
                }}
              >
                <h5>+$1/mo</h5>
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

export default AddOns;
