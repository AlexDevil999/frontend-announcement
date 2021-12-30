import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import MuiPhoneNumber from "material-ui-phone-number";


import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import ImageUpload from "./ImageUpload";
import axios from "axios";

const useStyles = makeStyles(styles);

// handlePhoneChange(value) {
//   if (value) {
//     this.setState({ phone: value });
//   }
// }

export default function Announcement(props) {

  const galleryImageList = [
    "https://raw.githubusercontent.com/dxyang/StyleTransfer/master/style_imgs/mosaic.jpg"]

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const [form, setForm] = useState({
    city: '',
    brand: '',
    mark: '',
    year: '',
    steering_wheel: '',
    drive_unit: '',
    volume: '',
    fuel: '',
    body: '',
    box: '',
    price: '',
    color: '',
    mileage: '',
    description: '',
    date_created: '',
    user: '46'
})


const [city, setCity] = useState('')
const [brand, setBrand] = useState('')
const [mark, setMark] = useState('')
const [year, setYear] = useState('')
const [steering_wheel, setSteeringWheel] = useState('')
const [drive_unit, setDriveUnit] = useState('')
const [volume, setVolume] = useState('')
const [fuel, setFuel] = useState('')
const [body, setBody] = useState('')
const [box, setBox] = useState('')
const [price, setPrice] = useState('')
const [color, setColor] = useState('')
const [mileage, setMileage] = useState('')
const [description, setDescription] = useState('')
const [user, setUser] = useState('46')
const [date_created,setDate] = useState('2021-12-27T18:10:24.056Z')
const [images, setImages] = useState(["https://autoleasing.s3.amazonaws.com/uploads/auto/5459ba01-5248-4f07-90ef-36b6a781fc8e.jpg"])


const handleChange = (event) => {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    });
}

const handleSubmit = async () => {
    // store the states in the form data
console.log(city);

    const loginFormData = new FormData();
    loginFormData.append("city", form.city)
    loginFormData.append("brand", form.brand)
    loginFormData.append("mark", form.mark)
    loginFormData.append("year", form.year)
    loginFormData.append("steering_wheel", form.steering_wheel)
    loginFormData.append("drive_unit", form.drive_unit)
    loginFormData.append("volume", form.volume)
    loginFormData.append("fuel", form.fuel)
    loginFormData.append("body", form.body)
    loginFormData.append("box", form.box)
    loginFormData.append("price", form.price)
    loginFormData.append("color", form.color)
    loginFormData.append("mileage", form.mileage)
    loginFormData.append("description", form.description)
    loginFormData.append("date_created", form.date_created)
    loginFormData.append("user", form.user)


    try {
        const response = await axios({
            method: "POST",
            url: "https://auto-leasing-bank.herokuapp.com/api/auto/",
            data: { city: city, brand: brand, mark: mark, year: year, steering_wheel: steering_wheel, drive_unit: drive_unit, volume: volume, fuel: fuel, body: body, box: box, price: price, color: color, mileage: mileage, description: description, images: images, user: user,date_created:date_created },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQwNjI4NjY1LCJpYXQiOjE2NDA2MjgzNjUsImp0aSI6ImY0ZWJkZTM3YmQ1YzRiNDhhYzkxY2UyMWVjMWNiMmZhIiwidXNlcl9pZCI6NDZ9.hsMk9Sk2LG9DTYYwMUDy8bUk4uGYDOCZ9dk-RSMrRP0'
            }
        });
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} >
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Создать обьявление</h4>
                  </CardHeader>
                  <CardBody>
                  <CustomInput
                      labelText="Город"
                      id="pass"
                      value={city}
                      change={e=>setCity(e.target.value)}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                      <CustomInput
                      labelText="Бренд"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                      <CustomInput
                      labelText="Год выпуска"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                      <CustomInput
                      labelText="Скорость"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                      <CustomInput
                      labelText="Лошадиная сила"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                      <CustomInput
                      labelText="volume"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                    <CustomInput
                      labelText="топливо"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                    <CustomInput
                      labelText="кузов"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                    <CustomInput
                      labelText="Коробка"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                    <CustomInput
                      labelText="Цена"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                      }}
                    />
                    <CustomInput
                      labelText="Цвет"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                    <CustomInput
                      labelText="Миля"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                    <CustomInput
                      labelText="Описание"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  <ImageUpload cardName="Input Image" imageGallery={galleryImageList} />
                  </CardFooter>
                  <CardFooter className={classes.cardFooter}>
                    <Button onClick={handleSubmit} simple color="primary" size="lg">
                      Войти
                    </Button>
                  </CardFooter>
                </form>
              </Card>
              
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
