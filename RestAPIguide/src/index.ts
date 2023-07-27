import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser());

const server = http.createServer(app);

server.listen(8080, ()=> {
    console.log("server running at")
});

const MONGO_URL = "mongodb+srv://pranay55:mR3dFTK3EGbN6xwy@cluster0.pgvvm6l.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error)=> console.log(error));

app.use('/', router());
