import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import { useParams } from "react-router";
import axios from "axios";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {


  const { id } = useParams();


    const [car, setCar] = useState({})

    useEffect(() => {
        axios
            .get(`https://auto-leasing-bank.herokuapp.com/api/auto/${id}/`)
            .then(response => {
                setCar(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }, [])




  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image="https://oir.mobi/uploads/posts/2021-03/1616542118_41-p-chernii-tsvet-fon-50.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h4 className={classes.title}>Бренд: {car.brand}</h4>
              <h4>
              Марка: {car.mark}
              </h4>
              <h4>
               Год выпуска: {car.year}
              </h4>
              <h4>
               Вид топлива: {car.fuel}
              </h4>
              <h4>
               Кузов: {car.body}
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <h4 className={classes.titleh1}>Описание: {car.description}</h4>
          
          <SectionCarousel image={car.images}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
