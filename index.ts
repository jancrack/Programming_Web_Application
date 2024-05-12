// @ts-ignore
import express from 'express';
import cors from 'cors';
import {carRouter} from "./routers/carRouter";

const app = express();

app.use(cors());
app.use((req, res, next) => {
    console.log('Content-Type:', req.headers['content-type']);
    next();
});
app.use(express.json());

app.use('/cars', carRouter);
app.listen(3001, () => {
    console.log("Server started");
});