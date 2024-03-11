import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StartPage, Selection, ResultPage } from "./components";
import { cities } from "./data";

const App = () => {
  const newCities = cities.map((city) => city.name);

  const [criminalEscapedCity, setCriminalEscapedCity] = useState(null);
  const [cops, setCops] = useState(defaultState);

  useEffect(() => {
    setCriminalEscapedCity(getRandomCity(newCities.length));
    setCops(defaultState);
  }, []);

  // console.log(cops)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/selection"
          element={<Selection cops={cops} setCops={setCops} />}
        />
        <Route
          path="/result"
          element={
            <ResultPage cops={cops} criminalEscapedCity={criminalEscapedCity} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const defaultState = [
  { cop: 1, city: "", vehicle: "" },
  { cop: 2, city: "", vehicle: "" },
  { cop: 3, city: "", vehicle: "" },
];

function getRandomCity(cityCount) {
  const randomIndex = Math.floor(Math.random() * cityCount);

  return cities[randomIndex].name;
}
