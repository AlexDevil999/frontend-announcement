import React, { useEffect, useState } from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import SectionCompletedExamples from "./SectionCompletedExamples.js";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import landing from "assets/img/landing.jpg";
import profile from "assets/img/profile.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

import axios from 'axios'



export default function SectionExamples() {



  const [cars, setCars] = useState([])

  useEffect(() => {
    axios
      .get("https://auto-leasing-bank.herokuapp.com/api/auto/")
      .then(response => {
        setCars(response.data)
      })
      .catch(error => {
        console.log(error)
      });
  }, [])

  console.log(cars);



  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <div className={classes.title}>
          <h2>Продажа авто</h2>
        </div>
        <GridContainer justify="center">
          {Object.keys(cars).map((car) => (

            <GridItem xs={12} sm={12} md={3}>
              <Link to="landing-page" className={classes.link}>
                <img
                  src={`${cars[car].images[0]}`}
                  alt="..."
                  width="1400px"
                  height="800px"
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <SectionCompletedExamples car = {cars[car]}/>
              </Link>
            </GridItem>
          ))}

        </GridContainer>
      </div>
    </div>
  );
}
