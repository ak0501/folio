/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
require("dotenv").config();
const api = {
  key: process.env.REACT_APP_API_KEY,
  url: process.env.REACT_APP_API_URL,
};

const API_KEY = "abb1cf1535bd78a8e3431b6fa9b448eb";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const LocalWeather = (props) => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [city, setCity] = useState("");
  const [ico, setIco] = useState("");
  const [desc, setDesc] = useState("");
  const [temp, setTemp] = useState("");
  let imgUrl = `http://openweathermap.org/img/wn/${ico}.png`;

  /* -------------------------- useeffect to call API ------------------------- */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position);
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      const data = fetch(
        `${API_URL}?lat=${lat}&lon=${lon}&unit=imperial&appid=${API_KEY}`
      )
        .then((data) => data.json())
        .then((data) => {
          if (data.cod !== 200) {
            throw new Error();
          }

          setCity(data.name);
          setIco(data.weather[0].icon);
          setDesc(data.weather[0].description);
          setTemp(data.main.temp);

          // console.log(city);
          // console.log(ico);

          // setLoading(false);
        })
        .catch((err) => {
          // setError(true);
          // setLoading(false);
          console.log(err.message);
        });
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <p>
          {" "}
          Location{""}
          {city}
        </p>
        <a>
          <img src={imgUrl} alt="day" />
          <p></p>
          {desc}
          {`${temp}F`}
        </a>
      </div>
    </>
  );
};

export default LocalWeather;
