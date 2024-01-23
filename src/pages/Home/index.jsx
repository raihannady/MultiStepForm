import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import classes from "./style.module.scss";
import Sidebar from "../../components/SideBar";
import { Box } from "@mui/material";
import PersonalInfo from "../../components/PersonalInfo";
import SelectPlan from "../../components/SelectPlan";
import { setStep } from "./action";
import AddOns from "../../components/AddOns";
import Summary from "../../components/Summary";
import ThankYou from "../../components/ThankYou";

const Home = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.homeReducer.step);
  const stepHandler = () => {
    // if (currentStep === 5) {
    //   dispatch(setStep(1));
    // } else {
    dispatch(setStep(currentStep + 1));
    // }
  };

  const backHandler = () => {
    if (currentStep === 1) {
      return;
    } else {
      dispatch(setStep(currentStep - 1));
      return;
    }
  };

  const renderComponent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo stepHandler={stepHandler} />;
      case 2:
        return (
          <SelectPlan stepHandler={stepHandler} backHandler={backHandler} />
        );
      case 3:
        return <AddOns stepHandler={stepHandler} backHandler={backHandler} />;
      case 4:
        return <Summary stepHandler={stepHandler} backHandler={backHandler} />;
      case 5:
        return <ThankYou />;
      default:
        return <PersonalInfo />;
        break;
    }
  };
  return (
    <Box className={classes.home}>
      <Sidebar />
      {/* <PersonalInfo /> */}
      {/* <SelectPlan /> */}
      {renderComponent()}
    </Box>
  );
};

export default Home;
