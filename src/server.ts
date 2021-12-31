import express from "express";

const app = express();

app.listen(3333, () => {
  console.log(`${process.env.PROJECT_NAME} running at 3333`);
});
