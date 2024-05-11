// @ts-ignore
import express from 'express';
// @ts-ignore
// import {DB} from "./core/DB";
import {carRouter} from "./routers/carRouter";

const app = express();

app.use(carRouter);

app.listen(3300, () => {
    console.log("Server started");
})
