import express from "express";
import cors from "cors";
import router from "./app/route";

const app = express();

// perser
app.use(express.json());
app.use(cors());

app.use('/api', router)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// global error handler

export default app;
