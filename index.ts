// @ts-ignore
import express, {Application, json, Request, Response} from 'express';
import mysql2 from "mysql";

const app: Application = express();

app.use(json())

app.get("/api", (req: Request, res: Response) => {
    res.send({
        message: "1"
    })
})
app.put("/", (req: Request, res: Response) => {
    res.send({
        id: 1
    })
})
app.post("/api", (req: Request, res: Response) => {
    console.log(req.body)
    res.send({
        id: 2
    })

})
app.delete("/", (req: Request, res: Response) => {
    res.send({
        id: 1
    })
})
app.listen(3300, () => {
    console.log("Server started");
})
