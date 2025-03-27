import express from 'express';
// import Hello from "./hello.js";
import Lab5 from "./lab5/index.js";
import cors from "cors";

const app = express();
app.use(cors());
Lab5(app);
// Hello(app);

app.listen(process.env.PORT || 4000)

