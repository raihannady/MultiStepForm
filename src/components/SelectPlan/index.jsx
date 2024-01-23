import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import classes from "./style.module.scss";
import { setUserData } from "../../pages/Home/action";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const SelectPlan = ({ stepHandler, backHandler }) => {
  const dispatch = useDispatch();
  const currentUserData = useSelector((state) => state.homeReducer.userdata);

  const [checked, setChecked] = useState({
    plan: currentUserData.plan,
    price: currentUserData.price,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChecked((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlanClick = () => {
    dispatch(
      setUserData({
        currentUserData: {
          ...currentUserData,
          ...checked,
        },
      })
    );
  };

  console.log(currentUserData);
  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginY: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <h1>Select Your Plan</h1>
          <p className={classes.subtitle}>
            You have the option of monthly or yearly billing
          </p>
          <Box sx={{ mt: 1 }}>
            <Grid container gap={4} className={classes.grid}>
              <CardContent
                className={classes.card}
                onChange={(e) => handleChange(e)}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <g fill="none" fillRule="evenodd">
                      <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
                      <path
                        fill="#FFF"
                        fillRule="nonzero"
                        d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <div className={classes.desc}>
                    <h5>Arcade</h5>
                    <h5>$9/mo</h5>
                  </div>
                </div>
              </CardContent>
              <CardContent
                className={classes.card}
                onClick={() => setChecked("Advance", 12)}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <g fill="none" fillRule="evenodd">
                      <circle cx="20" cy="20" r="20" fill="#F9818E" />
                      <path
                        fill="#FFF"
                        fillRule="nonzero"
                        d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <div className={classes.desc}>
                    <h5>Advanced</h5>
                    <h5>$12/mo</h5>
                  </div>
                </div>
              </CardContent>
              <CardContent
                className={classes.card}
                onClick={() => setChecked("Pro", 15)}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <g fill="none" fillRule="evenodd">
                      <circle cx="20" cy="20" r="20" fill="#483EFF" />
                      <path
                        fill="#FFF"
                        fillRule="nonzero"
                        d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <div className={classes.desc}>
                    <h5>Pro</h5>
                    <h5>$15/mo</h5>
                  </div>
                </div>
              </CardContent>
            </Grid>
            <div className={classes.switch}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Monthly</Typography>
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography>Yearly</Typography>
              </Stack>
            </div>
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
                onClick={() => {
                  stepHandler(), handlePlanClick();
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

export default SelectPlan;
