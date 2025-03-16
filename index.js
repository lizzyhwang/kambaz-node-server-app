import express from 'express';
import Hello from "./hello.js";
import Lab5 from "./lab5/index.js";

const app = express();
Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000)

