/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
// require("dotenv").config();
// const api = {
//   key: f2d7a3ee16ff14d75f0702f3db41469b,
//   url: process.env.REACT_APP_API_URL,
// };

const API_KEY = "f2d7a3ee16ff14d75f0702f3db41469b";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const LocalWeather = () => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [city, setCity] = useState("");
  const [ico, setIco] = useState("");
  const [desc, setDesc] = useState("");
  const [temp, setTemp] = useState("");
  let imgUrl = `https://openweathermap.org/img/wn/${ico}.png`;

  /* -------------------------- useeffect to call API ------------------------- */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position);
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      let values = fetch(
        `${API_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
      )
        .then((values) => values.json())
        .then((values) => {
          if (values.cod !== 200) {
            throw new Error();
          }

          setCity(values.name);
          setIco(values.weather[0].icon);
          setDesc(values.weather[0].description);
          setTemp(values.main.temp);

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
  }, [lat, lon]);

  // useEffect(() => {}, []);

  return (
    <>
      <div>
        <p> Location {city}</p>
        <a>
          <img src={imgUrl} alt="day" />
          <p></p>
          {desc} {`${temp}F`}
        </a>
      </div>
    </>
  );
};

export default LocalWeather;
