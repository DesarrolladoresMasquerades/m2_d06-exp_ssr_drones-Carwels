// Iteration #1
const mongoose = require("mongoose");
require("../db/index");
const Drone = require("../models/Drone.model");

require("dotenv").config();

const drones = [
  {
    nameer: "Creep XL 500",
    propellers: 3,
    maxSpeed: 12,
  },
  {
    name: "Racer 57",
    propellers: 4,
    maxSpeed: 20,
  },
  {
    name: "Courier 3000i",
    propellers: 6,
    maxSpeed: 18,
  },
];

Drone.create(drones)
  .then((result) => {
    return console.log(result.length);
  })
  .catch((err) => console.log(err));

 mongoose.connection.close()