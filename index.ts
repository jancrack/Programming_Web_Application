// @ts-ignore
import express from 'express';
// @ts-ignore
// import {DB} from "./core/DB";
import {carRouter} from "./routers/carRouter";

const app = express();

app.use(carRouter);

// app.put("/", (req: Request, res: Response) => {
//     res.send({
//         id: 1
//     })
// })
// app.post("/api", (req: Request, res: Response) => {
//     console.log(req.body)
//     res.send({
//         id: 2
//     })
//
// })
// app.delete("/", (req: Request, res: Response) => {
//     res.send({
//         id: 1
//     })
// })
app.listen(3300, () => {
    console.log("Server started");
})
