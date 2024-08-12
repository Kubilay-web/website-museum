const express = require("express");
const path = require("path");

const app = express();
const port = 3001;

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Index", "index.html"));
});

app.get("/things-to-do/sightseeing/london-attraction", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Attraction", "index.html"));
});

app.get(
  "/things-to-do/event/6987276-lion-king-the-musical-at-the-lyceum-theatre",
  (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Lion-King", "index.html"));
  }
);

app.get("/things-to-do/family-activities", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "London-For-Kids", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
