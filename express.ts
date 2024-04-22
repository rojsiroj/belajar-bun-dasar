import express from "express";

const app = express();

app.get("/", (req, res) => {
  const name = req.query["name"] || "world!";
  res.send(`Hello ${name}`);
});

app.listen(3000, () => {
  console.info("listening on http://localhost:3000");
});
