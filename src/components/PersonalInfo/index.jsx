import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import classes from "./style.module.scss";
import { setUserData } from "../../pages/Home/action";

const PersonalInfo = ({ stepHandler }) => {
  const dispatch = useDispatch();
  const currentUserData = useSelector((state) => state.homeReducer.userdata);

  const [formData, setFormData] = useState({
    name: currentUserData.name || "",
    email: currentUserData.email || "",
    phone: currentUserData.phone || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    dispatch(
      setUserData({
        currentUserData: {
          ...currentUserData,
          ...formData,
        },
      })
    );
    stepHandler();
  };

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
          <h1>Personal Info</h1>
          <p className={classes.subtitle}>
            Please provide your name, email address, and phone number
          </p>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              size="small"
              value={formData.name}
              onChange={handleChange}
              InputProps={{
                style: {
                  borderRadius: "8px",
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              size="small"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                style: {
                  borderRadius: "8px",
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
              autoFocus
              size="small"
              value={formData.phone}
              onChange={handleChange}
              InputProps={{
                style: {
                  borderRadius: "8px",
                },
              }}
            />

            <div className={classes.button}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                }}
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

export default PersonalInfo;
