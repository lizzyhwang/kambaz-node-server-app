import express from "express";
import "dotenv/config";
import Hello from "./hello.js";
import Lab5 from "./lab5/index.js";
import UserRoutes from "./kambaz/users/routes.js"
import CourseRoutes from "./kambaz/courses/routes.js";
import cors from "cors";
import session from "express-session";

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));

app.use(express.json());

Hello(app);
Lab5(app);
UserRoutes(app);
CourseRoutes(app);

app.listen(4000);

// app.listen(process.env.PORT || 4000);