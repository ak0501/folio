// import "../../App.css";
import { Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";

require("dotenv").config();

const api = {
  key: process.env.REACT_APP_API_KEY,
  url: process.env.REACT_APP_API_URL,
};

const Forecast = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  }, []);

  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(
        `api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}`
      )
        // fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
        });
    }
  };


  return (
    <div>
      <form>
        <Form.Group>
          <Form.Label>search</Form.Label>
          <Form.Control type="text" placeholder="search city" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          className="btn btn-success"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Forecast;
