// @ts-ignore
import express, {Application, json, Request, Response} from 'express';
import mysql2 from "mysql2";

const app: Application = express();

app.use(json())

app.get("/", async (req: Request, res: Response) => {
    const conn = await mysql2.createPool({
        host: "localhost",
        database: "web_application",
        user: "root",
        password: ""
    }).promise();

    const [rows] = await conn.query("SELECT * FROM cars");
    console.log({rows});

    res.send(rows)
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
