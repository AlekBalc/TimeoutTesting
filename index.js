import express from "express";
const app = express();
const port = 3000;

app.all("*", async (req, res) => {
  const duration = 1000 * 60 * 6; // 6 minutes
  await new Promise((resolve) => setTimeout(resolve, duration));
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
