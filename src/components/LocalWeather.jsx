/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
require("dotenv").config();
const api = {
  key: process.env.REACT_APP_API_KEY,
  url: process.env.REACT_APP_API_URL,
};

const API_KEY = "f2d7a3ee16ff14d75f0702f3db41469b";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const LocalWeather = (props) => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [city, setCity] = useState("");
  const [ico, setIco] = useState("");
  const [desc, setDesc] = useState("");
  let imgUrl = `http://openweathermap.org/img/wn/${ico}.png`;

  /* -------------------------- useeffect to call API ------------------------- */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  fetch(`${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.cod !== 200) {
        throw new Error();
      }

      setCity(response.name);
      setIco(response.weather[0].icon);
      setDesc(response.weather[0].description);
      console.log(city);
      console.log(ico);

      // setLoading(false);
    })
    .catch((err) => {
      // setError(true);
      // setLoading(false);
      console.log(err.message);
    });
  return (
    <>
      <div>
        <p> Your location is {city}</p>
        <a>
          <img src={imgUrl} alt="day" />
          {desc}
        </a>
      </div>
    </>
  );
};

export default LocalWeather;
