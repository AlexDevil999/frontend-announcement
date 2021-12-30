import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples(props) {
  const classes = useStyles();
  const {car} = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>{car.brand}</h2>
            <h4>
              Год - {car.year} <br/>
              Цена - {car.price} $ <br/>
              Описание - {car.description}
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
