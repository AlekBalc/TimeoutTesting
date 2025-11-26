import express from "express";
import { airportData } from "./airport.js";
const app = express();
const port = 3000;

app.all("/airport{*splat}", async (req, res) => {
  console.log("Airport endpoint hit");
  res.json(airportData);
});

app.all("/timeout{*splat}", async (req, res) => {
  console.log("Timeout endpoint hit");
  const duration = 1000 * 60 * 6; // 6 minutes
  await new Promise((resolve) => setTimeout(resolve, duration));
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
