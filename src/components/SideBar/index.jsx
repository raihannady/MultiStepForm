import React from "react";
import { useSelector } from "react-redux";

import classes from "./style.module.scss";
import { Box, Stack } from "@mui/material";

const Sidebar = () => {
  const currentStep = useSelector((state) => state.homeReducer.step);
  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.layoutContainer}>
          <div className={classes.layout}>
            <div
              className={currentStep === 1 ? classes.img : classes.imgInActive}
            >
              1
            </div>
            <div className={classes.layoutStep}>
              <div className={classes.step}>
                <h5>STEP 1</h5>
              </div>
              <div className={classes.title}>
                <h5>YOUR INFO</h5>
              </div>
            </div>
          </div>
          <div className={classes.layout}>
            <div
              className={currentStep === 2 ? classes.img : classes.imgInActive}
            >
              2
            </div>
            <div className={classes.layoutStep}>
              <div className={classes.step}>
                <h5>STEP 2</h5>
              </div>
              <div className={classes.title}>
                <h5>SELECT PLAN</h5>
              </div>
            </div>
          </div>
          <div className={classes.layout}>
            <div
              className={currentStep === 3 ? classes.img : classes.imgInActive}
            >
              3
            </div>
            <div className={classes.layoutStep}>
              <div className={classes.step}>
                <h5>STEP 3</h5>
              </div>
              <div className={classes.title}>
                <h5>ADD-ONS</h5>
              </div>
            </div>
          </div>
          <div className={classes.layout}>
            <div
              className={
                currentStep === 4 || currentStep === 5
                  ? classes.img
                  : classes.imgInActive
              }
            >
              4
            </div>
            <div className={classes.layoutStep}>
              <div className={classes.step}>
                <h5>STEP 4</h5>
              </div>
              <div className={classes.title}>
                <h5>SUMMARY</h5>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
