// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

//tesla
const {
  coloursByPopularity: teslaColours,
  speedStats: teslaSpeedStats
} = tesla;

const { topSpeed: teslaTopSpeed } = teslaSpeedStats;
const [teslaTopColour] = teslaColours;

//honda
const {
  coloursByPopularity: hondaColours,
  speedStats: hondaSpeedStats
} = honda;

const { topSpeed: hondaTopSpeed } = hondaSpeedStats;
const [hondaTopColour] = hondaColours;

//render
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
