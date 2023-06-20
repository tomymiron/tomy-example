import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is the server</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>This is the about</h1>");
});

app.listen(3000);
console.log("Server on port 3000");
