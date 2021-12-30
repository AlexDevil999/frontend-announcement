import React, { useState, useEffect } from 'react';
import Cars from './Cars';
import Filter from './Filter';
import { makeStyles } from '@material-ui/core/styles';
import Searchbar from "./SearchBar";

import { ThemeProvider } from "@material-ui/core/styles";

const url = 'https://auto-leasing-bank.herokuapp.com/api/auto/';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,

  },
  title:{
    textAlign:"center"
  },
  paper: {
    marginBottom: 30,
  },
  flex: {
    display: 'flex',
    flexWrap:"wrap",
    justifyContent: 'space-around',
  },
  toolbar: {
    justifyContent: 'space-between',
  }
}));

export default function CarContent() {
  const [countries, setCountries] = useState([])
  const [searchCountry, setsearchCountry] = useState([])
  const fetchCountryData = async () => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
    setsearchCountry(countries)
    // setfilterCountry(countries)
  }

  const searchCountries = (searchTerm) => {
    var search = [...countries];
    search = search.filter(a => a.city.toLowerCase().includes(searchTerm.toLowerCase()));
    setsearchCountry(search)
  }
  const searchPrices = (searchTerm) => {
    var search = [...countries];
    search = search.filter(a => a.price.toString().toLowerCase().includes(searchTerm.toLowerCase()));
    setsearchCountry(search)
  }
  const searchYears = (searchTerm) => {
    var search = [...countries];
    search = search.filter(a => a.year.toString().toLowerCase().includes(searchTerm.toLowerCase()));
    setsearchCountry(search)
  }


  const filterCountries = (filterTerm) => {
    var filter = [...countries];
    filter = filter.filter(a => a.region.includes(filterTerm));
    setsearchCountry(filter)
  }
  useEffect(() => {
    fetchCountryData();
  },
    []
  );

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <div className={classes.title}>
          <h2>Продажа авто</h2>
        </div>
      <ThemeProvider>
      <div className={classes.flex}>
        <Searchbar name = "Город" searchCountries={searchCountries} />
        <Searchbar name = "Цена" searchCountries={searchPrices} />
        <Searchbar name = "Год выпуска" searchCountries={searchYears} />
      </div>
      <br/>
      <Cars countries={searchCountry} />
      </ThemeProvider>

    </div>
  )
}