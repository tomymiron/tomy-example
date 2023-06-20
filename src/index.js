import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is the server</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>This is the about</h1>");
});

app.listen(process.env);
console.log("Server on port " + process.env);
